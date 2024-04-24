/// <reference types="cypress" />
import FluxoDoPedido from "../support/page_objects/fluxo-do-pedido.page";

let dadosCompra;
context("Funcionalidade: Fluxo de pedido", () => {
  /*  Como cliente
            Quero acessar a Loja EBAC
            Para fazer um pedido de 4 produtos
            Fazendo a escolha dos produtos
            Adicionando ao carrinho
            Preenchendo todas opções no checkout
            E validando minha compra ao final */
  before(() => {
    cy.fixture("usuarioCompra").then((usuario) => {
      dadosCompra = usuario;
    });
  });

  let fluxoDoPedido;
  beforeEach(() => {
    fluxoDoPedido = FluxoDoPedido;
    cy.visit("/");
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    fluxoDoPedido.fluxoDoPedidoTotal();
  });
});
