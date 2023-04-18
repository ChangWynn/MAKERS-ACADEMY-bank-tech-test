class Transaction {
  constructor() {
    this.date = Date.now()
    this.credit = 0
    this.debit = 0
  }
}

module.exports = Transaction