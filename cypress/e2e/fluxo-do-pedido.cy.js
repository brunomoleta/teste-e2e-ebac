/// <reference types="cypress" />

context("Funcionalidade: Fluxo de pedido", () => {
  /*  Como cliente
            Quero acessar a Loja EBAC
            Para fazer um pedido de 4 produtos
            Fazendo a escolha dos produtos
            Adicionando ao carrinho
            Preenchendo todas opções no checkout
            E validando minha comprar ao final */

  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    cy.fluxoDoPedidoTotal();
  });
});
