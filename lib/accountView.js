class AccountView {
  printStatement(accountModel) {
    const transaction = accountModel.transactions[0]
    const date = this.#formatDate(transaction.date)
    const credit = this.#formatCredit(transaction.credit)

    console.log(`${date} || ${credit} ||`)
  }

  #formatDate(date) {
    const format = { day: "2-digit", month: "2-digit", year: "numeric" }
    return date.toLocaleDateString("en-GB", format)
  }

  #formatCredit(credit) {
    if (credit === 0) return ""
    return credit.toFixed(2)
  }
}

module.exports = AccountView