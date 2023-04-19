class AccountView {
  printStatement (accountModel) {
    const statement = accountModel.transactions.map((transaction) => {
      return this.#formatTransaction(accountModel, transaction)
    }).reverse()
    statement.forEach((transaction) => console.log(transaction))
  }

  #formatTransaction (accountModel, transaction) {
    const date = this.#formatDate(transaction.date)
    const credit = this.#formatAmount(transaction.credit)
    const debit = this.#formatAmount(transaction.debit)
    const balance = this.#calculateBalance(accountModel, transaction)
    return `${date} || ${credit} || ${debit} || ${balance}`
  }

  #formatDate (date) {
    const format = { day: '2-digit', month: '2-digit', year: 'numeric' }
    return date.toLocaleDateString('en-GB', format)
  }

  #formatAmount (amount) {
    if (amount === 0) return ''
    return amount.toFixed(2)
  }

  #calculateBalance (accountModel, transaction) {
    accountModel.balance += transaction.credit - transaction.debit
    return accountModel.balance.toFixed(2)
  }
}

module.exports = AccountView
