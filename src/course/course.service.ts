import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";
import { Course, CourseDocument } from "./schemas/course.schema";

@Injectable()
export class CourseService {

  constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>) {
  }

  create(createCourseDto: CreateCourseDto) {
    return this.courseModel.create(createCourseDto);
  }

  findAll() {
    return this.courseModel.find({}).exec();
  }

  findOne(id: number) {
    return this.courseModel.findOne({ id }).exec();
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.courseModel.findByIdAndUpdate(id, updateCourseDto, {new: true}).exec();
  }

  remove(id: number) {
    return this.courseModel.findByIdAndRemove(id).exec();
  }
}
