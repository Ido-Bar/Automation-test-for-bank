class bankCustomer {
  selectName() {
    return cy.get("#userSelect");
  }

  clickLogin() {
    cy.get("button[type='submit']").click();
    cy.url().should("include", "account");
  }
}

export default bankCustomer;
