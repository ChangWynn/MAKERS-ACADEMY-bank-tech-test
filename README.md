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

Download or clone this repository and run the following commands:
> If you already have NVM and Node installed, jump to step 3
<br>

1. Install NVM - once done, restart your terminal
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
2. Install Node.js
```
nvm install node
nvm use node
```
3. Install dependencies
```
npm install
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

The controller have three methods that you can call:
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
![test and coverage](/images/running_the_program.png)
---
## Run the tests
```
jest
```
![test and coverage](/images/tests_and_coverage.png)

