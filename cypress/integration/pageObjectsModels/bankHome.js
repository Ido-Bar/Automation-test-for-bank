class bankHome {
  visit() {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    cy.url().should("include", "login");
  }

  customerLog() {
    cy.get("button[ng-click='customer()']").click();
    cy.url().should("include", "customer");
  }

  returnHome() {
    cy.get("button[ng-click='home()']").click();
  }

  managerLog() {
    cy.get("button[ng-click='manager()']").click();
    cy.url().should("include", "manager");
  }
}

export default bankHome;
