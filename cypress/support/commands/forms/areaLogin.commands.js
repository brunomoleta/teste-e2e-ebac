Cypress.Commands.add("acessarAplicativo", () => {
  cy.setCookie(Cypress.env("cookieKey"), Cypress.env("cookieValue"), {
    domain: Cypress.env("url"),
  });
  cy.visit("/");
});

Cypress.Commands.add("acessarAreaLogin", () => {
  cy.get('[href="/Tab/Account"]').click();
});
