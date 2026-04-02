import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
/* 
Your class AccessTokenStrategy
├── PassportStrategy(Strategy, 'jwt')  ← Passport does JWT verify
├── constructor super(...)             ← you configure HOW to extract/verify
└── validate(payload)                  ← you decide WHAT goes into req.user

*/
@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.AT_SECRET || 'at-secret',
        });
    }
// req.user = payload
    validate(payload: any) {
        return payload;
    }
}

/* 
Guard runs AuthGuard with jwt strategy.
Passport verifies token and decodes payload.
Passport calls validate(payload).
Whatever validate returns is assigned to req.user. 
*/
