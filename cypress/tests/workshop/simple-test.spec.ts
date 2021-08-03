describe("first try", () => {
  it("SHOULD open the page", () => {
    cy.visit("/");
    cy.get("#username").should("exist").clear().type("Katharina_Bernier");
    cy.get("#password").should("exist").clear().type("s3cret");
    cy.get(".PrivateSwitchBase-input-14").should("be.not.checked");
    cy.get("[data-test=signin-submit]").should("be.enabled").click();
    cy.get(".makeStyles-logo-26").should("exist");
  });
});
