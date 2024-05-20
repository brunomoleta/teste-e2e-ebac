/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

context("Funcionalidade: Checkout", () => {
  Given("você loga na conta do usuário", () => {
    cy.acessarAplicativo();
    cy.acessarAreaLogin();
  });

  When("você insere produtos no carrinho", () => {
    cy.registrarConta();
  });

  Then("você finaliza o pedido de compra com sucesso", () => {
    cy.get('[data-testid="warning"]').should(
      "not.contain",
      "Unable to login into app..please try again",
    );
  });
});
