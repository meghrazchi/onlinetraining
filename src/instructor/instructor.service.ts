import { Injectable } from '@nestjs/common';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";
import { Instructor, InstructorDocument } from "./schemas/instructor.schema";

@Injectable()
export class InstructorService {

  constructor(@InjectModel(Instructor.name) private instructorModel: Model<InstructorDocument>) {
  }

  create(createInstructorDto: CreateInstructorDto) {
    return this.instructorModel.create(createInstructorDto);
  }

  findAll() {
    return this.instructorModel.find({}).exec();
  }

  findOne(id: number) {
    return this.instructorModel.findOne({ id }).exec();
  }

  update(id: number, updateInstructorDto: UpdateInstructorDto) {
    return this.instructorModel.findByIdAndUpdate(id, updateInstructorDto, {new: true}).exec();
  }

  remove(id: number) {
    return this.instructorModel.findByIdAndRemove(id).exec();
  }
}
