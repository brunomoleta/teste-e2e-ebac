Cypress.Commands.add("finalizarCompra", () => {
  cy.get("#terms").click();
  cy.get("#place_order").click();
});
Cypress.Commands.add("mensagemConfirmacao", () => {
  cy.get(
    ".woocommerce-order-overview.woocommerce-thankyou-order-details.order_details",
  );
});

Cypress.Commands.add("accessCheckout", () => {
  cy.get(".woocommerce-message").find("a").click();
  cy.scrollTo("bottom");
  cy.get(".wc-proceed-to-checkout").find("a").click();
});

Cypress.Commands.add("finalizarProdutos", () => {
  cy.verificarQuantidade(4, false);
  cy.preencherDadosUsuario();
  cy.finalizarCompra();
});

Cypress.Commands.add("confirmacaoCompra", () => {
  cy.mensagemConfirmacao();
  cy.verificarQuantidade(4, true);
});

Cypress.Commands.add("fluxoDoPedidoTotal", () => {
  cy.comprarProdutos();
  cy.accessCheckout();

  cy.finalizarProdutos();
  cy.confirmacaoCompra();
});

import "@testing-library/cypress/add-commands";
