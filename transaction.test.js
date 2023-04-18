const Transaction = require('./transaction')

describe(Transaction, () => {

  it('should be instantiated with credit and debit equal to 0', () => {
    const transaction = new Transaction()
    expect(transaction.credit).toEqual(0)
    expect(transaction.debit).toEqual(0)
  })
})