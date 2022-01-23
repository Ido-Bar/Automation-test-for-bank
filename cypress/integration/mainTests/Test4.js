import bankHome from "../pageObjectsModels/bankHome.js";
import bankCustomer from "../pageObjectsModels/bankCustomer.js";
import bankAccount from "../pageObjectsModels/bankAccount.js";
import bankTransactions from "../pageObjectsModels/bankTransactions.js";

describe("Transactions Test", function () {
    before(function () {
      cy.fixture("UserData").then(function (data) {
        this.data = data;
      });
    });
  
    it("Deposits cash, withdraws some, then checks the transactions to verify both transactions", function () {
        const homePage = new bankHome();
        const customerPage = new bankCustomer();
        const customerAccount = new bankAccount();
        const transactionsPage = new bankTransactions();

        homePage.visit();

        homePage.customerLog();
    
        customerPage.selectName().select(this.data.name);
    
        customerPage.clickLogin();
    
        customerAccount.chooseDeposit();
    
        customerAccount.chooseAmount().type(this.data.amountToDeposit);
    
        customerAccount.submitDepositAmount();
    
        customerAccount.chooseWithdrawl();
    
        customerAccount.chooseAmount().wait(500).type(this.data.amountToWithdraw);
    
        customerAccount.submitWithdrawlAmount();
    
        customerAccount.chooseTransactions();
    
        transactionsPage.setDate();
    
        transactionsPage
          .checkDeposit()
          .should("contain", this.data.amountToDeposit);
    
        transactionsPage
          .checkWithdrawl()
          .should("contain", this.data.amountToWithdraw);
    });
  });