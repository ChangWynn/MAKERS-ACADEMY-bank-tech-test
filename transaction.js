class Transaction {
  constructor () {
    this.date = Date.now()
    this.credit = 0
    this.debit = 0
  }

  deposit (amount) {
    this.credit = amount
  }

  withdraw (amount) {
    this.debit = amount
  }
}

module.exports = Transaction
