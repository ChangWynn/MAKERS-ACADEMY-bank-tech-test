const AccountController = require('../lib/accountController')
const AccountModel = require('../lib/accountModel')

describe(AccountController, () => {

  let model; let controller
  beforeEach(() => {
    model = new AccountModel()
    controller = new AccountController(model)
  })

  describe("new instance", () => {
    it("should accept an instance of the model class", () => {
      expect(controller.model).toBeDefined()
    })

    it("should create a new instance of the view class", () => {
      expect(controller.view).toBeDefined()
    })
  })

  describe(".deposit method", () => {
    it("should add a new credit transaction object to the model", () => {
      controller.deposit(100)
      expect(controller.model.transactions.length).toEqual(1)
      expect(controller.model.transactions[0].credit).toEqual(100)
    }) 
  })

  describe(".withdraw method", () => {
    it("should add a new debit transaction object to the model", () => {
      controller.withdraw(100)
      expect(controller.model.transactions.length).toEqual(1)
      expect(controller.model.transactions[0].debit).toEqual(100)
    }) 
  })
})