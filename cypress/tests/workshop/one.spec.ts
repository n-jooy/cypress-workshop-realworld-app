describe("Übung 1", () => {
  it("SHOULD login succesfully", () => {
    /**
     * TEST 1
     * Erstelle einen Login Test.
     * Finde die passenden Selectoren für die Input-Felder und den Submit-Button.
     * Username lautet "Katharina_Bernier" und das Passwort "s3cret".
     * Überlege dir eine passende Überprüfung / Assertion am Ende des Tests.
     */

    cy.visit("/");

    // cy.get("???").clear().type("...");

    // cy.get("???").should("???").click();

    // Assertion
  });

  it("SHOULD logout succesfully", () => {
    /**
     * TEST 2
     * Erstelle einen Logout Test.
     * Finde die passenden Selectoren für die Input-Felder und den Submit-Button.
     * Username lautet "Katharina_Bernier" und das Passwort "s3cret".
     * Überlege dir eine passende Überprüfung / Assertion am Ende des Tests.
     */

    cy.visit("/");

    // cy.get("???").clear().type("...");

    // cy.get("???").should("???").click();

    // Assertion
  });

  it("SHOULD show message if wrong user or passsword", () => {
    /**
     * TEST 3
     * Erstelle einen Login Test ähnlich dem Test 1 nur mit falschem Username und Passwort.
     * Überlege dir eine passende Überprüfung / Assertion am Ende des Tests.
     */

    cy.visit("/");

    // cy.get("???").clear().type("...");

    // cy.get("???").should("???").click();

    // Assertion

    /**
     * Eventuell ist erfolgreiches Einloggen nicht mehr möglich, nach diesem Test.
     * Die App muss neugestartet werden.
     */
  });
});
