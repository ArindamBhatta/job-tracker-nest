import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { SignupDto } from "./dto/signup.dto";
import { Tokens } from "./types/tokens.type";
import { BadRequestException, ForbiddenException, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { LoginDto } from "./dto/login.dto";
import { User } from "../users/entities/user.entity";
import { AuthUserResponseDto } from "./dto/auth-user-response.dto";
import { AuthResponseDto } from "./dto/auth-response.dto";
import { TokenResponseDto } from "./dto/token-response.dto";


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    //utility methods

    hashData(data: string) {
        return bcrypt.hash(data, 10)
    }

    async getTokens(userId: number, email: string): Promise<Tokens> {

        const [at, rt] = await Promise.all([
            this.jwtService.signAsync({
                sub: userId,
                email: email
            }, {
                secret: process.env.AT_SECRET || 'at-secret',
                expiresIn: '15m'
            }),

            this.jwtService.signAsync({
                sub: userId,
                email: email
            }, {
                secret: process.env.RT_SECRET || 'rt-secret',
                expiresIn: '7d',
            })
        ]);

        return {
            access_token: at,
            refresh_token: rt
        }
    }

    async updateRtHash(userId: number, rt: string) {
        const hash = await this.hashData(rt);
        await this.usersService.update(userId, { refreshToken: hash });
    }

    private buildAuthUser(user: User): AuthUserResponseDto {
        return {
            userId: user.userId,
            persona: user.persona,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            address: user.address,
            dateOfBirth: user.dateOfBirth ?? null,
            aadhaarNumber: user.aadhaarNumber ?? null,
            pincode: typeof user.pincode === 'number' ? user.pincode : user.pincode?.id ?? null,
        };
    }

    private buildTokenResponse(tokens: Tokens): TokenResponseDto {
        return {
            access_token: tokens.access_token,
            refresh_token: tokens.refresh_token,
        };
    }



    async signUp(dto: SignupDto): Promise<AuthResponseDto> {
        const existingUser = await this.usersService.findByEmail(dto.email);
        if (existingUser) {
            throw new BadRequestException("User already exist");
        }

        const hashPassword: string = await this.hashData(dto.password);

        const newUser = await this.usersService.create({
            fullName: dto.fullName,
            email: dto.email,
            password: hashPassword,
            phone: dto.phone,
            address: dto.address,
            persona: dto.persona,
        });

        const token = await this.getTokens(newUser.userId, newUser.email);
        await this.updateRtHash(newUser.userId, token.refresh_token)

        return {
            user: this.buildAuthUser(newUser),
            tokens: this.buildTokenResponse(token),
        };
    }

    async login(dto: LoginDto): Promise<AuthResponseDto> {
        const user = await this.usersService.findByEmail(dto.email);
        if (!user) throw new ForbiddenException('Access Denied');

        //password match
        const passwordMatches = await bcrypt.compare(dto.password, user.password);
        if (!passwordMatches) throw new ForbiddenException('Access Denied');

        const token = await this.getTokens(user.userId, user.email)
        await this.updateRtHash(user.userId, token.refresh_token)
        return {
            user: this.buildAuthUser(user),
            tokens: this.buildTokenResponse(token),
        };
    }

    async logout(userId: number) {
        await this.usersService.update(userId, { refreshToken: null });
        return true;
    }

    async refreshTokens(userId: number, rt: string): Promise<AuthResponseDto> {
        const user = await this.usersService.findById(userId);
        if (!user || !user.refreshToken) throw new ForbiddenException('Access Denied');

        const rtMatches = await bcrypt.compare(rt, user.refreshToken);
        if (!rtMatches) throw new ForbiddenException('Access Denied');

        const token = await this.getTokens(user.userId, user.email);
        await this.updateRtHash(user.userId, token.refresh_token);
        return {
            user: this.buildAuthUser(user),
            tokens: this.buildTokenResponse(token),
        };
    }
}