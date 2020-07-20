import { Module } from '@nestjs/common';
import { CoinmarketcapModule } from './coinmarketcap/coinmarketcap.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CoinmarketcapModule, UserModule],
})
export class AppModule {}
