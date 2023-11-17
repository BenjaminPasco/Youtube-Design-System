import { Controller, Get } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('videos')
export class VideoController {
  constructor(private videoService: VideoService) {}

  @Get()
  findAll() {
    return this.videoService.findAll();
  }
}
