const Transaction = require('./transaction')

describe(Transaction, () => {

  let transaction;
  beforeEach(() => {
    transaction = new Transaction()
  })

  describe('new instance', () => {
    it('should have a credit and debit property initially set to 0', () => {
      expect(transaction.credit).toEqual(0)
      expect(transaction.debit).toEqual(0)
    })
  
    it('should have a date property holding the date of instanciation', () => {
      const now = new Date(2023, 3, 18) 
      const fakeDateNow = jest.spyOn(Date, 'now')
      fakeDateNow.mockImplementation(() => now )
  
      const mockedTransaction = new Transaction()
      expect(mockedTransaction.date).toEqual(now)
    })
  })
})