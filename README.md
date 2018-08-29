# Charity Donation Component

View online at https://charity-component.azurewebsites.net/

## Setup

### Install Dependencies 

`yarn install`

### Build app 

`yarn build`

### Copy static assets 

`yarn copy-assets`

### Start server in dev mode

You can view the site on http://localhost:3000/

`yarn start:dev`

### Start server

`yarn start`

You can view the site on http://localhost:3000/

## Development tools

### Test 

`yarn test`

### Lint

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