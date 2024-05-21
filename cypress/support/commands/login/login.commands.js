import { faker } from "@faker-js/faker";

Cypress.Commands.add("acessarAplicativo", () => {
  cy.setCookie(Cypress.env("cookieKey"), Cypress.env("cookieValue"), {
    domain: Cypress.env("url"),
  });
  cy.visit("/");
});
Cypress.Commands.add("acessarAreaLogin", () => {
  cy.get('[href="/Tab/Account"]').click();
});

Cypress.Commands.add("enterInput", (id, texto) => {
  cy.get(`[data-testid=${id}]`).type(texto, { log: false });
});
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();

const data = {
  firstName: firstName,
  lastName: lastName,
  email: faker.internet.email({
    firstName: firstName,
    lastName: lastName,
  }),
  phone: faker.phone.number(),
  password: faker.internet.password({ length: 8 }),
};

Cypress.Commands.add("registrarConta", () => {
  cy.get(`[data-testid=signUp]`).click();

  cy.enterInput("firstName", `${firstName}{enter}`);
  cy.focused().type(`${lastName}{enter}`);
  cy.focused().type(`${data.phone}{enter}`);
  cy.focused().type(`${data.email}{enter}`);
  cy.focused().type(`${data.password}{enter}`);
  cy.focused().type(`${data.password}{enter}`);

  cy.get(`[data-testid=create]`).click();
});

import "@testing-library/cypress/add-commands";
