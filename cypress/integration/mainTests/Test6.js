import bankHome from "../pageObjectsModels/bankHome.js";
import bankManager from "../pageObjectsModels/bankManager.js";

describe("Account Create test", function () {
    before(function () {
      cy.fixture("UserData").then(function (data) {
        this.data = data;
      });
    });
  
    it("Creates a customer, creates an account for the customer, then logs the new account's ID", function () {
    const homePage = new bankHome();
    const managerPage = new bankManager();

    homePage.visit();

    homePage.managerLog();

    managerPage.accountCreationAssertion();

    managerPage.selectAddCustomer();

    managerPage.chooseFirstName().type(this.data.newCustomerFirstName);

    managerPage.chooseLastName().type(this.data.newCustomerLastName);

    managerPage.choosePostCode().type(this.data.newCustomerPostCode);

    managerPage.submit();

    managerPage.selectOpenAccount();

    managerPage
      .chooseName()
      .select(
        this.data.newCustomerFirstName + " " + this.data.newCustomerLastName
      );

    managerPage.chooseCurrency().select(this.data.currency);

    managerPage.submit();

    managerPage.selectCustomers();

    managerPage.searchCustomer().type(this.data.newCustomerFirstName);

    managerPage.logAccountNumber();
    });
  });