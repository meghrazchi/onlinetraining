import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from "../user/dto/create-user.dto";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { MailService } from "../mail/mail.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private mailService: MailService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {

      await this.usersService.loginInfoUpdate(user.id,
        { last_login_date: Date.now(), last_login_ip: null });

      user.password = undefined;
      return user;
    }
    return null;
  }

  async login(loginDto: AuthLoginDto) {

    const user = await this.validateUser(loginDto.email, loginDto.password);


    const payload = { email: user.email, id: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto) {

    const user = await this.usersService.create(createUserDto);

    const payload = { email: user.email, id: user._id };

    // send confirmation mail
    await this.mailService.sendUserConfirmation(user, user.email_activation_code);

    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
  }
}
