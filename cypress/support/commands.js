Cypress.Commands.add("login", (usuario, senha) => {
  cy.get("#username").type(usuario);
  cy.get("#password").type(senha, { log: false });
  cy.get(".woocommerce-form > .button").click();
});

Cypress.Commands.add("enterInput", (id, texto) => {
  cy.get(`#${id}`).type(texto, { log: false });
});

Cypress.Commands.add("verificarQuantidade", (quantidade, final) => {
  if (final){
  cy.get(".order_item")
    .should("have.length", quantidade);
  }
  else{
  cy.get(".cart_item")
    .should("have.length", quantidade);
  }
});

Cypress.Commands.add("dadosUsuario", () => {
  let dadosCompra;
  cy.fixture("usuarioCompra").then((usuario) => {
    dadosCompra = usuario;

    cy.wait(200);
    cy.enterInput("billing_first_name", dadosCompra.nome);
    cy.enterInput("billing_last_name", dadosCompra.sobrenome);

    cy.enterInput("billing_address_1_field", dadosCompra.endereco);
    cy.enterInput("billing_city", dadosCompra.cidade);
    cy.enterInput("billing_postcode", dadosCompra.cep);

    cy.enterInput("billing_phone", dadosCompra.telefone);
    cy.enterInput("billing_email", dadosCompra.email);
  });
});
Cypress.Commands.add("finalizarCompra", () => {
  cy.get("#terms").click();
  cy.get("#place_order").click();
});
Cypress.Commands.add("mensagemConfirmacao", () => {
  cy.get(
    ".woocommerce-order-overview.woocommerce-thankyou-order-details.order_details",
  );
});

import "@testing-library/cypress/add-commands";
