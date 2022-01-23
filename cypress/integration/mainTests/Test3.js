import bankHome from "../pageObjectsModels/bankHome.js";
import bankCustomer from "../pageObjectsModels/bankCustomer.js";
import bankAccount from "../pageObjectsModels/bankAccount.js";

describe("Withdrawl Test", function () {
    before(function () {
      cy.fixture("UserData").then(function (data) {
        this.data = data;
      });
    });
  
    it("Withdraws cash, then checks if withdrawl is successful", function () {
        const homePage = new bankHome();
        const customerPage = new bankCustomer();
        const customerAccount = new bankAccount();

        homePage.visit();

        homePage.customerLog();
    
        customerPage.selectName().select(this.data.name);
    
        customerPage.clickLogin();
    
        customerAccount.chooseWithdrawl();

        customerAccount.chooseAmount().wait(500).type(this.data.amountToWithdraw);

        customerAccount.submitWithdrawlAmount();
    });
  });