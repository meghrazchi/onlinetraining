import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type VideoDocument = Video & Document;

@Schema()
export class Video {

  @Prop({ required: true })
  thumbnail: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  mime: string;

  @Prop({ required: true })
  size: number;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  path: string;

  @Prop()
  section_id: mongoose.Schema.Types.ObjectId;

  @Prop()
  course_id: mongoose.Schema.Types.ObjectId;

  @Prop({ default: false })
  preview: boolean

  @Prop({ default: 0 })
  order: number
}

export const VideoSchema = SchemaFactory.createForClass(Video);