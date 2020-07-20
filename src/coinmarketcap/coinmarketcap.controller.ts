import { Controller, Get, Post, Param, HttpException, HttpStatus, Body} from '@nestjs/common';
import { CoinmarketcapService } from './coinmarketcap.service';
import { UserService } from 'src/user/user.service';

@Controller('coinmarketcap')
export class CoinmarketcapController {
    constructor(private coinmarketcapService:CoinmarketcapService, private userService:UserService){}

    @Get('price/:coin')
    async getPrice(@Param('coin') coin:string): Promise<number> {
        return await this.coinmarketcapService.getPrice(coin);
    }

    //In a full implementation a username would not be passed as you would be authencticated...but this is just a demo of nest
    @Post('buy/:coin')
    async buy(@Param('coin') coin:string, @Body('dollarAmount') dollarAmount:number, @Body('username') username:string): Promise<string> {
        const numberOfCoins = await this.coinmarketcapService.getNumberOfCoinsToBuy(coin, dollarAmount)
        const newBalance = this.userService.updateUserBalance(username, coin, numberOfCoins);
        return `New Balance for ${coin}: ${newBalance[coin]}`;
    }

    @Get('adminBalance/:slug')
    getAdminBalance(@Param('slug') slug:string): string {
        throw new HttpException({status: HttpStatus.FORBIDDEN, error: `${slug} is forbidden from accesing admin data`}, HttpStatus.FORBIDDEN); //Test error handling
    }
}
