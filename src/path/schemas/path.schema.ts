import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PathDocument = Path & Document;

@Schema()
export class Path {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true, unique: true })
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
  email_activation_code: string;

  @Prop({ default: null })
  email_activation_date: Date;

  @Prop({ default: null })
  mobile_activation_code: string;

  @Prop({ default: null })
  mobile_activation_date: Date;

  @Prop({ default: null })
  referral_code: string;

  @Prop({ default: null })
  referrer: string;

  @Prop({ default: false })
  block: boolean;
}

export const PathSchema = SchemaFactory.createForClass(Path);