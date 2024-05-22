Cypress.Commands.add("preencherDadosLogin", () => {
  cy.fixture("perfil.json").then((perfil) => {
    cy.enterInput("email", `${perfil.email}{enter}`);
    cy.focused().type(`${perfil.password}{enter}`);
  });
});

Cypress.Commands.add("loginCompleto", (id, texto) => {
  cy.acessarAplicativo();
  cy.acessarAreaLogin();
  cy.preencherDadosLogin();
  cy.respostaSucesso();
});
