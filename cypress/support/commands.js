import "./commands/preencherDados/preencherDadosUsuario.commands";
import "./commands/login/login.commands";
import "./commands/comprar/acessarProduto.commands";
import "./commands/comprar/comprarProduto.commands";
import "./commands/finalizar/finalizarCompra.commands";

Cypress.Commands.add("enterInput", (id, texto) => {
  cy.get(`#${id}`).type(texto, { log: false });
});

Cypress.Commands.add("verificarQuantidade", (quantidade, final) => {
  if (final) {
    cy.get(".order_item").should("have.length", quantidade);
  } else {
    cy.get(".cart_item").should("have.length", quantidade);
  }
});

import "@testing-library/cypress/add-commands";
