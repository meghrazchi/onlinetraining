import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category, CategoryDocument } from "./schemas/category.schema";

@Injectable()
export class CategoryService {

  @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto);
  }

  findAll() {
    return this.categoryModel.find({}).exec();
  }

  findOne(id: number) {
    return this.categoryModel.findOne({ id }).exec();
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {new: true}).exec();
  }

  remove(id: number) {
    return this.categoryModel.findByIdAndRemove(id).exec();
  }
}
