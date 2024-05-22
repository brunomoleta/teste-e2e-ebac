Cypress.Commands.add("respostaFail", (isSuccess, resposta) => {
  cy.get('[data-testid="warning"]').should("not.contain", resposta);
});
Cypress.Commands.add("respostaSucesso", () => {
  cy.selecionarId("warning").should("not.exist");
});
