import { Injectable } from '@nestjs/common';
import { CreatePathDto } from './dto/create-path.dto';
import { UpdatePathDto } from './dto/update-path.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Path, PathDocument } from "./schemas/path.schema";
import { Model } from "mongoose";

@Injectable()
export class PathService {

  constructor(@InjectModel(Path.name) private pathModel: Model<PathDocument>) {
  }

  create(createPathDto: CreatePathDto) {
    return this.pathModel.create(createPathDto);
  }

  findAll() {
    return this.pathModel.find({}).exec();
  }

  findOne(id: number) {
    return this.pathModel.findOne({ id }).exec();
  }

  update(id: number, updatePathDto: UpdatePathDto) {
    return this.pathModel.findByIdAndUpdate(id, updatePathDto, {new: true}).exec()
  }

  remove(id: number) {
    return this.pathModel.findByIdAndRemove(id).exec();
  }
}
