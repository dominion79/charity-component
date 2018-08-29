# Charity Donation Component

View online at https://charity-component.azurewebsites.net/

## Requirments

Node version 8

I would recommend using [nvm](https://github.com/creationix/nvm/blob/master/README.md) to switch between node versions


## Setup

### Install Dependencies 

`yarn install`

### Build app and copy assets

`yarn build && yarn copy-assets`

## Setup ENV vars

`cp .env-template .env`

Add the following environment variables to the `.env` file

```
PORT=3000
COOP_MOCK_API_ENDPOINT=https://coop-mock-test-api.herokuapp.com/
```

### Start server in dev mode

`yarn start:dev`

You can view the site on http://localhost:3000/

### Start server

`yarn start`

You can view the site on http://localhost:3000/

## Development tools

### Test 

`yarn test`

### Lint

`yarn lint`


## Run with Docker

`docker pull dominion79/charity-component`

`docker run -d -p 8080:3000 dominion79/charity-component`

You can view the site on http://localhost:8080/

## To do

Below are improvements that are still/could to be implemented: 

* Add service worker to store information locally, could update raised amount so far (until cache is reset)
* Form validation 
* Add CI and auto deployment 
* Counter animation to the values
* Browser tests
