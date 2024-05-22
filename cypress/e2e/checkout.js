import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

context("Funcionalidade: Checkout", () => {
  Given("você loga na conta do usuário", () => {
    cy.loginCompleto();
  });

  When("você insere produtos no carrinho", () => {
    cy.comprarProduto(0);
  });

  Then("você visualiza a ordem de compra com sucesso", () => {
    cy.get('[href="/Tab/Order"]').click();
    cy.selecionarId("Placed").click();
    cy.selecionarId("item-0").click();
    cy.selecionarId("productName").should(
      "have.text",
      "Handmade Leather Donddi sandals For Women",
    );
  });
});
