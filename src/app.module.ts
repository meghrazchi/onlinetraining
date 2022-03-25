import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { SectionModule } from './section/section.module';
import { CourseModule } from './course/course.module';
import { PackageModule } from './package/package.module';
import { InstructorModule } from './instructor/instructor.module';
import { TagModule } from './tag/tag.module';
import { CategoryModule } from './category/category.module';
import { PaymentModule } from './payment/payment.module';
import { MulterModule } from '@nestjs/platform-express';
import { MongooseModule } from "@nestjs/mongoose";
import { MailModule } from './mail/mail.module';
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/onlinetraining'),
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './upload',
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    UserModule,
    AuthModule,
    VideoModule,
    SectionModule,
    CourseModule,
    PackageModule,
    InstructorModule,
    TagModule,
    CategoryModule,
    PaymentModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
