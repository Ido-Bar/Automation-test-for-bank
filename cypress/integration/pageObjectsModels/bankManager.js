class bankManager {
  selectOpenAccount() {
    cy.get("button[ng-click='openAccount()']").click();
  }

  chooseName() {
    return cy.get("#userSelect");
  }

  chooseCurrency() {
    return cy.get("#currency");
  }

  submit() {
    cy.get("button[type='submit']").click();
  }

  accountCreationAssertion() {
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("successfully");
    });
  }

  selectAddCustomer() {
    cy.get("button[ng-click='addCust()']").click();
  }

  chooseFirstName() {
    return cy.get("input[placeholder='First Name']");
  }

  chooseLastName() {
    return cy.get("input[placeholder='Last Name']");
  }

  choosePostCode() {
    return cy.get("input[placeholder='Post Code']");
  }

  selectCustomers() {
    cy.get("button[ng-click='showCust()']").click();
  }

  searchCustomer() {
    return cy.get("input[placeholder='Search Customer']");
  }

  logAccountNumber() {
    cy.get("tbody td:nth-child(4)").then(($text) => {
      const accountNumber = $text.text();
      cy.log(accountNumber);
    });
  }
}

export default bankManager;
