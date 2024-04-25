import "@testing-library/cypress/add-commands";

Cypress.Commands.add("addCart", (sizeIndex, colorIndex) => {
  cy.wait(500);
  cy.get('[role="radiogroup"]').first().children().eq(sizeIndex).click();
  cy.get('[role="radiogroup"]').last().children().eq(colorIndex).click();

  cy.get(".single_add_to_cart_button").click();
  cy.get('[role="alert"]').contains("foi adicionado no seu carrinho.");
});

Cypress.Commands.add("acessarProdutoAddCarrinho", (index) => {
  cy.acessarProduto(index);
  cy.addCart(index, index);
});

Cypress.Commands.add("comprarProdutos", () => {
  cy.acessarProdutoAddCarrinho(0);
  cy.acessarProdutoAddCarrinho(1);
  cy.acessarProdutoAddCarrinho(2);

  cy.encontrarProduto("sweat");
  cy.addCart(3, 2);
});
