import { Controller, Request, Post, UseGuards, Body, Ip } from "@nestjs/common";
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { CreateUserDto } from "../user/dto/create-user.dto";
import { AuthRegisterDto } from "./dto/auth-register.dto";
import { AuthLoginDto } from "./dto/auth-login.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Request() req,
    @Body() body: AuthLoginDto
  ) {
    return this.authService.login(body);
  }

  // @UseGuards(LocalAuthGuard)
  @Post('register')
  async register(
    @Request() req,
    @Body() body: AuthRegisterDto,
  ) {
    return this.authService.register(body);
  }
}
