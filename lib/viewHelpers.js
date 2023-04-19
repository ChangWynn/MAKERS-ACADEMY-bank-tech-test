const viewHelpers = {
  formatAllTransactions: (accountModel) => {
    return accountModel.transactions.map((transaction) => {
      return viewHelpers.formatTransaction(accountModel, transaction)
    }).reverse()
  },

  formatTransaction: (accountModel, transaction) => {
    const date = viewHelpers.formatDate(transaction.date)
    const credit = viewHelpers.formatAmount(transaction.credit)
    const debit = viewHelpers.formatAmount(transaction.debit)
    const balance = viewHelpers.calculateBalance(accountModel, transaction)

    return `${date} || ${credit} || ${debit} || ${balance}\n`
  },

  formatDate: (date) => {
    const format = { day: '2-digit', month: '2-digit', year: 'numeric' }
    return date.toLocaleDateString('en-GB', format)
  },

  formatAmount: (amount) => {
    if (amount === 0) return ''
    return amount.toFixed(2)
  },

  calculateBalance: (accountModel, transaction) => {
    accountModel.balance += transaction.credit - transaction.debit
    return accountModel.balance.toFixed(2)
  }
}

module.exports = { viewHelpers }
