# GOVUK startkit

A simple starter kit to start writing node app.


## Getting started
Install dependencies using `yarn install` ensure you are using >= `Node v8.4.0`

Ensure you have a `.env` file containing all default env variables

`cp .env-template .env`

**Starting the app**

### Build assets
`yarn build`

### Start the app.

Ensure you build assets first

`yarn start`

### Runing the app in dev mode**

`yarn start:dev`

### Run linter

`yarn lint`

### Run tests

`yarn test`


## Gotchas
If you get this error when starting the app:
`Cannot find module './build/Release/DTraceProviderBindings'`

See for more details:

https://stackoverflow.com/questions/37550100/cannot-find-module-dtrace-provider

Run

`npm rebuild dtrace-provider`

## Package information 

| Package | Summary | 
|---------|---------|
| body-parser | To handle HTTP POST request in Express.js version 4 and above |
| bunyan | JSON logging |
| bunyan-format |
| bunyan-request-logger |
| compression | Compression middleware | 
| cookie-parser | 
| cookie-session | 
| csurf | CSRF token middleware |
| debug | 
| dotenv | Loads environment variables from a .env | 
| nunjucks | Template framework |
| express | 
| express-request-id | 
| helmet | Helmet helps you secure your Express apps by setting various HTTP headers | 
| http-errors | HTTP errors for Express |
| moment | Date library for parsing, validating, manipulating and formatting dates |
| morgan | Logging request details | 
| node-sass-middleware | 
| passport | Authentication middleware | 
| sass-middleware | 