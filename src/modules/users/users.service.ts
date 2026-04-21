import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { JobSeeker } from './entities/job-seeker.entity';
import { CreateJobSeekerDto } from './dto/create-job-seeker.dto';

@Injectable()

export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email: email } })
  }

  async create(userData: Partial<User>) {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user)

  }

  async update(id: number, updateDate: Partial<User>) {
    await this.userRepository.update({ userId: id }, updateDate)
  }

  async findById(id: number) {
    return this.userRepository.findOne({
      where: { userId: id }
    })
  }
}
