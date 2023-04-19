const AccountModel = require("../lib/accountModel")
const Transaction = require("../lib/transaction")

jest.mock("../lib/transaction.js")

describe(AccountModel, () => {

  let model;
  beforeEach(() => {
    model = new AccountModel()
    Transaction.mockClear()
  })

  describe("new instance", () => {
    it("should have a balance property initially set to 0", () => {
      expect(model.balance).toEqual(0)
    })
    it("should have a transactions property initially set to an empty", () => {
      expect(model.transactions).toEqual([])
    })
  })

  describe(".addTransaction method", () => {
    it("should return if amount is 0", () => {
      model.addTransaction(0)
      expect(model.transactions.length).toEqual(0)
    })

    it("should add a new transaction if amount is greater than 0", () => {
      const amount = 100

      model.addTransaction(amount)
      expect(Transaction).toHaveBeenCalledTimes(1)
      expect(model.transactions.length).toEqual(1)
    })

    it("should assign the provided amount to the new transaction's credit property", () => {
      const amount = 100
      Transaction.prototype.credit = amount
      Transaction.prototype.debit = 0

      model.addTransaction(amount)
      expect(model.transactions[0].credit).toEqual(amount)
      expect(model.transactions[0].debit).toEqual(0)
    })

    it("should also add a new transaction if amount is less than 0", () => {
      const amount = -100

      model.addTransaction(amount)
      expect(Transaction).toHaveBeenCalledTimes(1)
      expect(model.transactions.length).toEqual(1)
    })

    it("should convert the provided amount to absolute number before assigning to the transaction's debit property", () => {
      const amount = -100
      Transaction.prototype.credit = 0
      Transaction.prototype.debit = amount

      model.addTransaction(amount)
      expect(model.transactions[0].credit).toEqual(0)
      expect(model.transactions[0].debit).toEqual(-amount)
    })
  })
})