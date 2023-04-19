const AccountView = require("../lib/accountView")

describe(AccountView, () => {

  let view;
  let consoleSpy
  beforeEach(() => {
    view = new AccountView()
    consoleSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  describe(".printStatement", () => {
    it("should display a date in the format DD/MM/YYYY", () => {
      const transaction = {
        date: new Date(2023, 3, 19),
        credit: 100,
        debit: 0
      }

      const model = {
        balance: 0,
        transactions: [transaction]
      }
      
      const formattedDate = "19/04/2023"
    
      view.printStatement(model)
      expect(consoleSpy.mock.calls[0][0]).toEqual(expect.stringContaining(formattedDate))
    })
  })
})