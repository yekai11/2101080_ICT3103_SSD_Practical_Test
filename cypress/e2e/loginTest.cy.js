/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("Search feature", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000");
    cy.fixture("../../10-million-password-list-top-10000.txt").then(
      (fileContent) => {
        cy.get("@fileInput").attachFile({
          fileContent: fileContent.toString(),
          fileName: "10-million-password-list-top-10000",
          mimeType: "text/plain",
        });
      }
    );
    cy.hideWebpackOverlay();
  });

  it("displays default search page", () => {
    cy.get("#password-input").should("exist");
    cy.get("#login-button").should("exist");
  });

  it("search with valid input and goes back to search page", () => {
    const password = "aaaaaaaaaaaaaaaaaaaaaaaaaa";

    cy.get('input[type="file"]').as("fileInput", { force: true });
    cy.get("#password-input").type(`${password}`, { force: true });
    cy.get("#login-button").click({ force: true });

    cy.get("#search-result").should("have.text", password);
    cy.get("#back-button").click({ force: true });

    cy.get("#password-input").should("exist");
    cy.get("#login-button").should("exist");
  });

  it("search with invalid input and stays at search page", () => {
    const password = "123456";

    cy.window().then((w) => (w.beforeReload = true));

    cy.get('input[type="file"]').as("fileInput", { force: true });
    cy.get("#password-input").type(`${password}`, { force: true });
    cy.get("#login-button").click({ force: true });

    cy.get("#password-input").should(
      "have.value",
      password,
      "beforeReload",
      true
    );

    cy.get("#login-button").click({ force: true });

    cy.get("#password-input").should(
      "not.have.value",
      password,
      "beforeReload"
    );
  });
});
