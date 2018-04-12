# Node.js Stock Price Checker

This repository contains a couple of simple Node.js terminal applications to fetch stock prices from the [IEX API](https://iextrading.com/developer/). 

The first (main.js) does not use any packages, instead relying on Node's built-in HTTPS module. 

The second (mainAxios.js) uses the Axios package in order to implement a promised-based HTTP client. It makes use of JavaScript's async/await function. 

### Instructions

These applications require [Node.js](https://nodejs.org/) to run.

To run either of the terminal applications:

  - download the application and navigate to the application folder in your terminal
  
  - install dependencies
    
  - run either main.js (HTTPS module) or mainAxios.js (Axios - async/await)
 
```sh
$ yarn install
$ node main.js 
```
