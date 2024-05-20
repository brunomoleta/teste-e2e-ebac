import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("Funcionalidade Login", function () {
  Given("você acessa no formulário de registro", () => {
    cy.acessarAplicativo();
    cy.acessarAreaLogin();
  });

  When("você insere dados de login válidos", () => {
    cy.registrarConta();
  });

  Then("você é direcionado a página de login", () => {
    cy.get('[data-testid="warning"]').should(
      "not.contain",
      "Unable to login into app..please try again",
    );
  });
});
