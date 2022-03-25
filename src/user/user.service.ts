import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import * as bcrypt from 'bcrypt';
import { uid } from "uid";
import { LoginInfoDto } from "../auth/dto/auth-login-info.dto";

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async create(createUserDto: CreateUserDto) {

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const user = new this.userModel({
      ...createUserDto, password: hashedPassword,
      register_date: Date.now(),
      email_activation_code: uid(),
      mobile_activation_code: Math.floor(10000 + Math.random() * 90000),
      referral_code: uid(),
    });
    return user.save();
  }

  findAll() {
    return this.userModel.find({}).exec();
  }

  findOne(id: number) {
    return this.userModel.findById({ id }).exec();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true}).exec()
  }

  remove(id: number) {
    return this.userModel.findByIdAndRemove(id).exec();
  }

  getUserByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  loginInfoUpdate(id: number, loginInfo: LoginInfoDto) {
    return this.userModel.findByIdAndUpdate(id, loginInfo, {new: true}).exec()
  }
}
