Cypress.Commands.add("comprarProduto", (item) => {
  cy.get(`[data-testid=productDetails]`).eq(item).click();
  cy.get(`[data-testid=addToCart]`).click();
  cy.get(`[data-testid=selectAddressOrContinueToPayment]`).click();
  cy.get(`[data-testid=completeCheckout]`).click();
});
