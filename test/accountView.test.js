const AccountView = require("../lib/accountView")

describe(AccountView, () => {

  let view;
  let creditTransaction;
  let consoleSpy;
  beforeEach(() => {
    view = new AccountView()
    creditTransaction = {
      date: new Date(2023, 3, 19),
      credit: 100,
      debit: 0
    }
  
    consoleSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  describe(".printStatement", () => {
    it("should display a date in the format DD/MM/YYYY", () => {
      model = {
        balance: 0,
        transactions: [creditTransaction]
      }

      const formattedDate = "19/04/2023"
    
      view.printStatement(model)
      expect(consoleSpy.mock.calls[0][0]).toEqual(expect.stringContaining(formattedDate))
    })

    it("should display credit in a two decimal format", () => {
      const model = {
        balance: 0,
        transactions: [creditTransaction]
      }
      const formattedCredit = "100.00"
    
      view.printStatement(model)
      expect(consoleSpy.mock.calls[0][0]).toEqual(expect.stringContaining(formattedCredit))
    })
  })
})