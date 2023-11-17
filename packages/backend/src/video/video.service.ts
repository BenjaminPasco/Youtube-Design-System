import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; // Update the path

@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.video.findMany();
  }
}
