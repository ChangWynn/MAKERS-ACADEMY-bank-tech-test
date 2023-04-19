const AccountView = require('./accountView')
const AccountModel = require('./accountModel')

class AccountController {
  constructor (model) {
    this.view = new AccountView()
    this.model = model
  }

  deposit (amount) {
    this.model.addTransaction(amount)
  }

  withdraw (amount) {
    this.model.addTransaction(-amount)
  }

  viewStatement () {
    this.view.printStatement(this.model)
  }
}

const myAccount = new AccountModel()
const bankApp = new AccountController(myAccount)

bankApp.deposit(2000)
bankApp.withdraw(500)
bankApp.withdraw(500)

bankApp.viewStatement()

module.exports = AccountController
