class bankTransactions {
  setDate() {
    const t = new Date();
    const date = ("0" + t.getDate()).slice(-2);
    const month = ("0" + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    const hours = ("0" + t.getHours()).slice(-2);
    const minutes = ("0" + t.getMinutes()).slice(-2);
    const time = `${year}-${month}-${date}T${hours}:${minutes}`;
    cy.get("#start").type(time);
  }

  checkDeposit() {
    return cy.get("tr[id='anchor0'] td:nth-child(2)");
  }

  checkWithdrawl() {
    return cy.get("tr[id='anchor1'] td:nth-child(2)");
  }
}

export default bankTransactions;
