import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TagDocument = Tag & Document;

@Schema()
export class Tag {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  mobile: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  address: string;

  @Prop({ default: null })
  register_date: Date;

  @Prop({ default: null })
  last_login_ip: string;

  @Prop({ default: null })
  last_login_date: Date;

  @Prop({ default: null })
  activation_code: string;

  @Prop({ default: null })
  refer_code: string;

  @Prop({ default: null })
  referrer: string;

  @Prop({ default: true })
  block: boolean;
}

export const TagSchema = SchemaFactory.createForClass(Tag);