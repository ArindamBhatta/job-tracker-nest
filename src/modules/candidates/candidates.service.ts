import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobSeeker } from '../users/entities/job-seeker.entity';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(JobSeeker)
    private readonly jobSeekerRepository: Repository<JobSeeker>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createCandidateDto: CreateCandidateDto): Promise<JobSeeker> {
    const { userId, ...candidateInfo } = createCandidateDto;
    
    const user = await this.userRepository.findOne({ where: { userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const candidate = this.jobSeekerRepository.create({
      ...candidateInfo,
      user: user,
    });

    return await this.jobSeekerRepository.save(candidate);
  }

  async findAll(): Promise<JobSeeker[]> {
    return await this.jobSeekerRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<JobSeeker> {
    const candidate = await this.jobSeekerRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!candidate) {
      throw new NotFoundException(`Candidate with ID ${id} not found`);
    }
    return candidate;
  }

  async update(id: number, updateCandidateDto: UpdateCandidateDto, requesterId: number): Promise<JobSeeker> {
    const { userId, ...candidateInfo } = updateCandidateDto;
    const candidate = await this.findOne(id);

    // Authorization: check if requester is the owner
    if (candidate.user.userId !== requesterId) {
      throw new ForbiddenException('You are not authorized to update this profile');
    }

    if (userId) {
      const user = await this.userRepository.findOne({ where: { userId } });
      if (!user) {
        throw new NotFoundException(`User with ID ${userId} not found`);
      }
      candidate.user = user;
    }

    Object.assign(candidate, candidateInfo);
    return await this.jobSeekerRepository.save(candidate);
  }

  async remove(id: number, requesterId: number): Promise<boolean> {
    const candidate = await this.findOne(id);

    // Authorization: check if requester is the owner
    if (candidate.user.userId !== requesterId) {
      throw new ForbiddenException('You are not authorized to delete this profile');
    }

    const result = await this.jobSeekerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Candidate with ID ${id} not found`);
    }
    return true;
  }
}
