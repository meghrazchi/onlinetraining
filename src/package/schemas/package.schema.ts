import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Category } from "../../category/schemas/category.schema";
import { Course } from "../../course/schemas/course.schema";

export type PackageDocument = Package & Document;

@Schema()
export class Package {
  @Prop({ required: true })
  name: string;

  // features: [string];

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  original_price: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  course_ids: [{
    type: string
  }];

}

export const PackageSchema = SchemaFactory.createForClass(Package);