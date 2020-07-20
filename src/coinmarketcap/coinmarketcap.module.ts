import { Module } from '@nestjs/common';
import { CoinmarketcapController } from './coinmarketcap.controller';
import { CoinmarketcapService } from './coinmarketcap.service';
import { UserModule } from 'src/user/user.module';

@Module({
    controllers: [CoinmarketcapController],
    providers: [CoinmarketcapService],
    imports: [UserModule]
})
export class CoinmarketcapModule {
}
