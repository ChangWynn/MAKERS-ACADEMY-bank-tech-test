const AccountView = require("../lib/accountView")

describe(AccountView, () => {
  let creditTransaction; let debitTransaction;
  let view;
  let consoleSpy; 

  beforeEach(() => {
    creditTransaction = {
      date: new Date(2023, 3, 19),
      credit: 100,
      debit: 0
    }
    debitTransaction = {
      date: new Date(2023, 3, 19),
      credit: 0,
      debit: 100
    }
    view = new AccountView()
    consoleSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  describe(".printStatement", () => {

    describe("date output", () => {
      it("should be in the format DD/MM/YYYY", () => {
        model = {
          balance: 0,
          transactions: [creditTransaction]
        }

        const formattedDate = "19/04/2023"
      
        view.printStatement(model)
        expect(consoleSpy.mock.calls[0][0]).toEqual(expect.stringContaining(formattedDate))
      })
    })

    describe("credit output", () => {
      it("should be displayed in a two decimals format", () => {
        const model = {
          balance: 0,
          transactions: [creditTransaction]
        }
        const formattedCredit = "100.00"
      
        view.printStatement(model)
        expect(consoleSpy.mock.calls[0][0]).toEqual(expect.stringContaining(formattedCredit))
      })

      it("should not display anything when it's equal to 0", () => {
        const model = {
          balance: 0,
          transactions: [debitTransaction]
        }
        const partialExpectedOutput = "19/04/2023 ||  ||"
      
        view.printStatement(model)
        expect(consoleSpy.mock.calls[0][0]).toEqual(expect.stringContaining(partialExpectedOutput))
      })
    })
    
    describe("debit output", () => {
      it("should be displayed in a two decimals format", () => {
        const model = {
          balance: 0,
          transactions: [debitTransaction]
        }
        const formattedDebit = "19/04/2023 ||  || 100.00"
      
        view.printStatement(model)
        expect(consoleSpy.mock.calls[0][0]).toEqual(expect.stringContaining(formattedDebit))
      })

      it("should not display anything when it's equal to 0", () => {
        const model = {
          balance: 0,
          transactions: [creditTransaction]
        }
        const partialExpectedOutput = "19/04/2023 || 100.00 ||  ||"

        view.printStatement(model)
        expect(consoleSpy.mock.calls[0][0]).toEqual(expect.stringContaining(partialExpectedOutput))
      })
    })
  })
})
