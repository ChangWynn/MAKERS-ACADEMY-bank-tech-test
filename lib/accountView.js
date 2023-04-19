class AccountView {
  printStatement(accountModel) {
    const date = accountModel.transactions[0].date
    
    const format = { day: "2-digit", month: "2-digit", year: "numeric" }
    const formattedDate = date.toLocaleDateString("en-GB", format)
    console.log(formattedDate)
  }
}

module.exports = AccountView