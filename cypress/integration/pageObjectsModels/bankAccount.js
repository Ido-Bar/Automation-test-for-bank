class bankAccount {
  checkAccountNumber() {
    cy.get("div[ng-hide='noAccount'] strong:nth-child(1)").then(($text) => {
      const accountNumber = $text.text();
      cy.log(accountNumber);
    });
  }

  chooseDeposit() {
    cy.get("button[ng-click='deposit()']").click();
  }

  chooseAmount() {
    return cy.get("input[type='number']");
  }

  submitDepositAmount() {
    cy.get("button[type='submit']").click();
    cy.get("span[ng-show='message']").should("contain", "Successful");
  }

  chooseWithdrawl() {
    cy.get("button[ng-click='withdrawl()']").click();
    cy.get("form.ng-pristine > .btn");
  }

  submitWithdrawlAmount() {
    cy.get("button[type='submit']").click();
    cy.get("span[ng-show='message']").should("contain", "successful");
  }

  chooseTransactions() {
    cy.get("button[ng-click='transactions()']").wait(750).click();
    cy.url().should("include", "listTx");
  }
}

export default bankAccount;
