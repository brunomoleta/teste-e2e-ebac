Cypress.Commands.add("acessarAreaLogin", () => {
  cy.get('title="Login"').click();
});

Cypress.Commands.add("enterInput", (id, texto) => {
  cy.get(`#${id}`).type(texto, { log: false });
});

Cypress.Commands.add("login", (email, password) => {
  cy.enterInput("username", email);
  cy.enterInput("password", `${password}{enter}`);
});
