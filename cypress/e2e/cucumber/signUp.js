import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import { signUpPage } from "../../support/pages/signUp.page";

Given("você acessa no formulário de registro", () => {
  cy.acessarAplicativo();
  cy.acessarAreaLogin();
});

When("você insere dados de registro válidos", () => {
  signUpPage.registrarConta(faker.internet.email());
});

Then("você é direcionado à página inicial", () => {
  cy.respostaSucesso();
});

When("você insere dados já existentes", () => {
  cy.fixture("perfil.json").then((perfil) => {
    signUpPage.registrarConta(perfil.email);
  });
});

Then("você não consegue fazer o registro e aparece mensagem de erro", () => {
  cy.respostaFail("Email already exist");
});
