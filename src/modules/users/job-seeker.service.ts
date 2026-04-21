import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JobSeeker } from "./entities/job-seeker.entity";
import { Repository } from "typeorm";
import { CreateJobSeekerDto } from "./dto/create-job-seeker.dto";
import { User } from "./entities/user.entity";

@Injectable()

export class JobSeekerService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(JobSeeker)
        private jobSeekerReposotory: Repository<JobSeeker>,

    ) { }

    async findById(id: number) {
        return this.userRepository.findOne({
            where: { userId: id }
        })
    }

    async getJobSeekerByUserId(userId: number) {
        return this.jobSeekerReposotory.findOne({
            where: { user: { userId } },
            relations: ['user'],
        })
    }

    async createJobSeeker(userId: number, dto: CreateJobSeekerDto) {
        const user = await this.findById(userId);

        if (!user) {
            throw new NotFoundException("User not found");
        }

        const existingJobSeeker = await this.getJobSeekerByUserId(userId);

        if (existingJobSeeker) {
            throw new BadRequestException('Job seeker profile already exists for this user');
        }

        const jobSeeker = this.jobSeekerReposotory.create({
            ...dto,
            user: user
        });

        return this.jobSeekerReposotory.save(jobSeeker)
    }
}