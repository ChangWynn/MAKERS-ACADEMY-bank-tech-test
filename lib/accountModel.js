const Transaction = require('./transaction')

class AccountModel {
  constructor () {
    this.balance = 0
    this.transactions = []
  }

  addTransaction (amount) {
    const transaction = new Transaction()
    if (amount > 0) transaction.credit = amount
    else if (amount < 0) transaction.debit = -amount
    else return

    this.transactions.push(transaction)
  }
}

module.exports = AccountModel
