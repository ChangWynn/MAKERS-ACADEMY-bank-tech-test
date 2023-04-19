const AccountView = require('./accountView')

class AccountController {
  constructor(model) {
    this.view = new AccountView()
    this.model = model
  }

  deposit(amount) {
    this.model.addTransaction(amount)
  }

  withdraw(amount) {
    this.model.addTransaction(-amount)
  }
}

module.exports = AccountController
