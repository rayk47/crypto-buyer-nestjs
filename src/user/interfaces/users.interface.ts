import { CoinBalance } from "./coin-balance.interface";

export interface User {
    username: string,
    email: string,
    password: string,
    balance: CoinBalance
}