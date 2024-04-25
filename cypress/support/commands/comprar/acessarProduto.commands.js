import "@testing-library/cypress/add-commands";

Cypress.Commands.add("acessarProduto", (position) => {
  cy.visit("/produtos");
  cy.get(".product-image.image-loaded")
    .eq(position)
    .scrollIntoView({ easing: "swing" });
  cy.get(".product-image.image-loaded").eq(position).click();
});

Cypress.Commands.add("encontrarProduto", (word) => {
  cy.get('[name="s"]').eq(1).type(word).wait(2000).type("{enter}");
});
