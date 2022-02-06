import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { CoinBalance } from './interfaces/coin-balance.interface';
import { User } from './interfaces/users.interface';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){};

    @Post('create')
    createUser(@Body() createUserDto:CreateUserDto): User {
        return this.userService.createUser(createUserDto);
    }

    @Get('/:username')
    getUser(@Param('username') username:string): User {
        return this.userService.getUser(username);
    }

    //In a full implementation the users name would not be needed as you would be authenticated and know what user you are
    @Get('/:username/balance/')
    getBalance(@Param('username') username:string): CoinBalance {
      return this.userService.getUserBalance(username);
    }

    @Get('/:username/balance/:slug')
    getBalanceForCoin(@Param('username') username:string, @Param('slug') slug:string): number {
      return this.userService.getUserBalanceForCoin(username, slug);
    }
}
