Cypress.Commands.add("preencherDadosUsuario", () => {
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

import "@testing-library/cypress/add-commands";
