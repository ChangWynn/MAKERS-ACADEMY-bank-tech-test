class AccountView {
  printStatement(accountModel) {
    const transaction = accountModel.transactions[0]
    const date = transaction.date
    
    const format = { day: "2-digit", month: "2-digit", year: "numeric" }
    const formattedDate = date.toLocaleDateString("en-GB", format)
    const credit = transaction.credit.toFixed(2)
    console.log(`${formattedDate} || ${credit}`)
  }
}

module.exports = AccountView