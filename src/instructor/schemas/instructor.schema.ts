import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InstructorDocument = Instructor & Document;

@Schema()
export class Instructor {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  headline: string;

  @Prop({ required: true })
  biography: string;
}

export const InstructorSchema = SchemaFactory.createForClass(Instructor);