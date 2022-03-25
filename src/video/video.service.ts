import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Video, VideoDocument } from "./schemas/video.schema";
import { Model, Schema } from "mongoose";

@Injectable()
export class VideoService {

  constructor(@InjectModel(Video.name) private videoModel: Model<VideoDocument>) {}

  async create(createVideoDto: CreateVideoDto) {
    const video = new this.videoModel(createVideoDto);
    return video.save();
  }

  findAll() {
    return this.videoModel.find({}).exec();
  }

  async findOne(id: string) {
    return await this.videoModel.findById(id).exec();
  }

  update(id: string, updateVideoDto: UpdateVideoDto) {
    return this.videoModel.findByIdAndUpdate(id, updateVideoDto, {new: true}).exec()
  }

  remove(id: string) {
    return this.videoModel.findByIdAndRemove(id).exec();
  }
}
