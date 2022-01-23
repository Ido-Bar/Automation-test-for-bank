import bankHome from "../pageObjectsModels/bankHome.js";
import bankManager from "../pageObjectsModels/bankManager.js";

describe("Customer Create test", function () {
    before(function () {
      cy.fixture("UserData").then(function (data) {
        this.data = data;
      });
    });
  
    it("Creates a customer, then checks if the creation was successfull", function () {
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
    });
  });