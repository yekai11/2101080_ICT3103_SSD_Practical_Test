/// <reference types="cypress" />

describe("Search feature", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays default search page", () => {
    cy.get("#password-input").should("exist");
    cy.get("#login-button").should("exist");
  });
});
