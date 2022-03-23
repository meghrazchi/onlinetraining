import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TagDocument = Tag & Document;

@Schema()
export class Tag {
  @Prop({ required: true })
  title: string;

  @Prop({ default: null })
  parent: string;

  @Prop({ default: true })
  active: boolean;

  @Prop({ default: 0 })
  order: number;
}

export const TagSchema = SchemaFactory.createForClass(Tag);