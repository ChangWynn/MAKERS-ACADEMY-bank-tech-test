const AccountModel = require('../lib/accountModel')

describe(AccountModel, () => {

  let model;
  beforeEach(() => {
    model = new AccountModel()
  })

  describe('new instance', () => {
    it('should have a balance property initially set to 0', () => {
      expect(model.balance).toEqual(0)
    })
    it('should have a transactions property initially set to an empty', () => {
      expect(model.transactions).toEqual([])
    })
  })
})