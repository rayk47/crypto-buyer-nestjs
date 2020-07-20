import { Injectable } from '@nestjs/common';
import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { CoinBalance } from './interfaces/coin-balance.interface';

@Injectable()
export class UserService {
    private readonly users: User[] = [{
        username: 'testUser',
        email: 'testUser@gmail.com',
        password: '123',
        balance: {total:0}
    }];

    createUser(user:CreateUserDto): User {
        const newUser:User = {
            username: user.username,
            email: user.email,
            password: user.password,
            balance: {total:0}
        }
        this.users.push(newUser);
        return newUser;
    }

    getUser(username:string):User {
        return this.users.find(user => user.username === username);
    }

    getUserBalance(username:string):CoinBalance{
        return this.getUser(username).balance;
    }

    getUserBalanceForCoin(username:string, coin:string):number{
        return this.getUser(username).balance[coin] || 0;
    }

    updateUserBalance(username:string, coin:string, amount:number): CoinBalance{
        const userToUpdate = this.users.find(user => user.username === username);
        userToUpdate.balance[coin] = (userToUpdate.balance[coin] || 0) + amount;
        return userToUpdate.balance;
    }

}
