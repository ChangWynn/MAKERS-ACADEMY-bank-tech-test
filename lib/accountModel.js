const Transaction = require('./transaction')

class AccountModel {
  constructor () {
    this.balance = 0
    this.transactions = []
  }

  addTransaction(amount) {
    if (this.#isNotValid(amount)) return 
    const transaction = new Transaction()
    if (amount > 0) transaction.credit = amount
    if (amount < 0) transaction.debit = -amount
    this.transactions.push(transaction)
  }

  // private

  #isNotValid(amount) {
    if (typeof amount !== 'number') return true
    if (amount === 0) return true
    return false
  }
}

module.exports = AccountModel
