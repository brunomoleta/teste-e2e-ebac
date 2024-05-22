Cypress.Commands.add("enterInput", (id, texto) => {
  cy.get(`[data-testid=${id}]`).type(texto, { log: false });
});
Cypress.Commands.add("selecionarId", (id) => {
  cy.get(`[data-testid=${id}]`);
});
