import { Injectable } from '@nestjs/common';
import axios from 'axios';

const coinmarketcapAxios = axios.create({
    baseURL: `${process.env.COINMARKETCAP_URL}`
})

@Injectable()
export class CoinmarketcapService {
    
    async getPrice(coin:string):Promise<number> {
        const {data} = await coinmarketcapAxios.get('', {headers: {'X-CMC_PRO_API_KEY': `${process.env.COINMARKETCAP_API_KEY}`, 'Accepts': 'application/json'}, params: {
            'start': '1',
            'limit': '5000',
            'convert': 'USD'
          }
    });
    return data['data'].find(coinmarketcapCoin => coinmarketcapCoin['slug'] === coin)?.quote?.USD?.price;
    }


    async getNumberOfCoinsToBuy(coin:string, dollarAmount:number): Promise<number> {
        const coinPrice = await this.getPrice(coin);
        if(isNaN(coinPrice)){
            throw new Error(`No price found for coin: ${coin}`);
        }
       return dollarAmount / coinPrice;

    }
}
