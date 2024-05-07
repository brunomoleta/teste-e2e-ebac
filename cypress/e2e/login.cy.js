/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

let dadosLogin;
context("Funcionalidade Login", () => {
  before(() => {
    cy.fixture("perfil").then((perfil) => {
      dadosLogin = perfil;
    });
  });

  Given("Dado que você está na páginal inicial", () => {
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    });
    cy.acessarAreaLogin();
  });
  When("você insere dados de login válidos", () => {
    cy.login(dadosLogin.usuario, dadosLogin.senha);
  });
  Then("você é direcionado a página de checkout", () => {
    cy.get("form").should("not.exist");
  });
});
