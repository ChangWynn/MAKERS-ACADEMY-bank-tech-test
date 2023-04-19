const { viewHelpers } = require('./viewHelpers')

class AccountView {
  
  printStatement (accountModel) {
    const statement = this.formatAllTransactions(accountModel)
    statement.forEach((transaction) => console.log(transaction))
  }
}

AccountView.prototype.formatAllTransactions = viewHelpers.formatAllTransactions
AccountView.prototype.formatTransaction = viewHelpers.formatTransaction
AccountView.prototype.formatDate = viewHelpers.formatDate
AccountView.prototype.formatAmount = viewHelpers.formatAmount
AccountView.prototype.calculateBalance = viewHelpers.calculateBalance

module.exports = AccountView
