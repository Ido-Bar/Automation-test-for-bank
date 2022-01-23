/// <refrence types="Cypress" />
import bankHome from "../pageObjectsModels/bankHome.js";
import bankCustomer from "../pageObjectsModels/bankCustomer.js";
import bankAccount from "../pageObjectsModels/bankAccount.js";
import bankTransactions from "../pageObjectsModels/bankTransactions.js";
import bankManager from "../pageObjectsModels/bankManager.js";

describe("Tests all tests", function () {
  before(function () {
    cy.fixture("UserData").then(function (data) {
      this.data = data;
    });
  });

  it("Runs through all the tests", function () {
    const homePage = new bankHome();
    const customerPage = new bankCustomer();
    const customerAccount = new bankAccount();
    const transactionsPage = new bankTransactions();
    const managerPage = new bankManager();

    homePage.visit();

    homePage.customerLog();

    customerPage.selectName().select(this.data.name);

    customerPage.clickLogin();

    customerAccount.checkAccountNumber();

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

    homePage.returnHome();

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
