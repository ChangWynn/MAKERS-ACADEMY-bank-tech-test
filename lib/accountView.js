class AccountView {
  printStatement(accountModel) {
    const transaction = accountModel.transactions[0]
    const date = this.#formatDate(transaction.date)
    const credit = this.#formatAmount(transaction.credit)
    const debit = this.#formatAmount(transaction.debit)

    console.log(`${date} || ${credit} || ${debit} ||`)
  }

  #formatDate(date) {
    const format = { day: "2-digit", month: "2-digit", year: "numeric" }
    return date.toLocaleDateString("en-GB", format)
  }

  #formatAmount(amount) {
    if (amount === 0) return ""
    return amount.toFixed(2)
  }
}

module.exports = AccountView