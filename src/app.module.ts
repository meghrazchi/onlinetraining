import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { SectionModule } from './section/section.module';
import { CourseModule } from './course/course.module';
import { PackageModule } from './package/package.module';
import { InstructorModule } from './instructor/instructor.module';

@Module({
  imports: [UserModule, VideoModule, SectionModule, CourseModule, PackageModule, InstructorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
