# Bank Tech Test

![test](https://img.shields.io/badge/tests-100%25-brightgreen?style=flat-square&logo=github)
![coverage](https://img.shields.io/badge/coverage-100%25-brightgreen?style=flat-square&logo=github)

![test](https://img.shields.io/badge/javascript-grey?style=flat-square&logo=javascript)
![test](https://img.shields.io/badge/node.js-grey?style=flat-square&logo=nodedotjs)
![test](https://img.shields.io/badge/jest-grey?style=flat-square&logo=jest)
![test](https://img.shields.io/badge/eslint-grey?style=flat-square&logo=eslint)

## Contents
  - [Description](#description)
  - [Getting Started](#getting-started)
  - [How to use](#how-to-use)
  - [Run the tests](#run-the-tests)
---
## Description

---
## Getting started
If you already have NVM and Node installed, download or clone this repository and run the following command:
```
npm install
```
If you don't, follow these instructions
  - Install NVM - once done, restart your terminal
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
  - Install Node.js
```
nvm install node
nvm use node
```
  - Install Jest
```
npm init -y
npm add jest
npm install -g jest
```
  - Install ESlint
 ```
 npm init @eslint/config
 ```
---
## How to use
  - Open the node REPL
```
node
```
  - Import `accountController.js` and `accountModel.js` or copy and paste the followings
```
const AccountController = require('./lib/accountController')
const AccountModel = require('./lib/accountModel')
```
  - Create a new model:
```
const model = new AccountModel()
```
  - Create a new controller and pass the model as argument:
```
const controller = new AccountController(model)
```

The controller have three methods you can call:
  - deposit(amount)
  - withdraw(amount)
  - viewStatement()
  
Example:
```
controller.deposit(1000)
controller.deposit(2000)
controller.withdraw(500)
controller.viewStatement()
```
---
## Run the tests
```
jest
```

