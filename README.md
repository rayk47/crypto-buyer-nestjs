## Description
The aim of this project was just to demonstrate how a quick service can be put together using NestJS. This service is not production ready and I have cut corners such as Authentication in order to present the capabilities of NestJS. 

The project is a pretty simple service that allows you to purchase(fake purchase) cryptocurrency based on the current price of coins on the market [coinmarketcap](https://coinmarketcap.com/)

## Installation

```bash
$ yarn install
```

## Running the app

Export env variables
```
export COINMARKETCAP_API_KEY=XYZ
export COINMARKETCAP_URL=https://XYZ.com
```


```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```

## Testing APIs
Supplied in the postman folder is a collection of API that you can quickly import to postman and call create and get user