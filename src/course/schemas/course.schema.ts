import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Instructor } from '../../instructor/schemas/instructor.schema';
import { Category } from "../../category/schemas/category.schema";
import { Tag } from "../../tag/schemas/tag.schema";

export type CourseDocument = Course & Document;

@Schema()
export class Course {

  @Prop({ required: true })
  introduction_video: string;

  @Prop({ required: true })
  thumbnail: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  headline: string;

  @Prop({ required: true })
  what_you_will_learn: [{
    type: String
  }];

  @Prop({ required: true })
  requirements: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  who_is_this_course_for: [{
    type: String
  }];

  @Prop({ required: true })
  instructors: [{
    type: Instructor
  }]

  @Prop()
  categories: [{
    type: Category
  }]

  @Prop()
  tags: [{
    type: Tag
  }]

  @Prop({ required: true })
  original_price: number

  @Prop({ default: 0 })
  price: number

  @Prop({ default: 0, min: 0, max: 100 })
  discount: number

}

export const CourseSchema = SchemaFactory.createForClass(Course);