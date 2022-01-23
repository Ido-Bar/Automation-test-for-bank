import bankHome from "../pageObjectsModels/bankHome.js";
import bankCustomer from "../pageObjectsModels/bankCustomer.js";
import bankAccount from "../pageObjectsModels/bankAccount.js";

describe("Deposit Test", function () {
    before(function () {
      cy.fixture("UserData").then(function (data) {
        this.data = data;
      });
    });
  
    it("Deposits cash, then checks if deposit is successful", function () {
        const homePage = new bankHome();
        const customerPage = new bankCustomer();
        const customerAccount = new bankAccount();

        homePage.visit();

        homePage.customerLog();
    
        customerPage.selectName().select(this.data.name);
    
        customerPage.clickLogin();
    
        customerAccount.chooseDeposit();
    
        customerAccount.chooseAmount().type(this.data.amountToDeposit);
    
        customerAccount.submitDepositAmount();
    });
  });