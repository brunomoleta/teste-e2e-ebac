class FluxoDoPedido {
  entrarProduto(position) {
    cy.visit("/produtos");
    cy.get(".product-image.image-loaded")
      .eq(position)
      .scrollIntoView({ easing: "swing" });
    cy.get(".product-image.image-loaded").eq(position).click();
  }
  encontrarProduto(word) {
    cy.get('[name="s"]').eq(1).type(word).wait(2000).type("{enter}");
  }

  addCart(sizeIndex, colorIndex) {
    cy.wait(500);
    cy.get('[role="radiogroup"]').first().children().eq(sizeIndex).click();
    cy.get('[role="radiogroup"]').last().children().eq(colorIndex).click();

    cy.get(".single_add_to_cart_button").click();
    cy.get('[role="alert"]').contains("foi adicionado no seu carrinho.");
  }

  entrarProdutoAddCarrinho(index) {
    this.entrarProduto(index);
    this.addCart(index, index);
  }

  accessCheckout() {
    cy.get(".woocommerce-message").find("a").click();
    cy.scrollTo("bottom");
    cy.get(".wc-proceed-to-checkout").find("a").click();
  }

  comprarProdutos() {
    this.entrarProdutoAddCarrinho(0);
    this.entrarProdutoAddCarrinho(1);
    this.entrarProdutoAddCarrinho(2);

    this.encontrarProduto("sweat");
    this.addCart(3, 2);
  }
  finalizarProdutos() {
    cy.verificarQuantidade(4, false);
    cy.dadosUsuario();
    cy.finalizarCompra();
  }
  confirmacaoCompra(){
    cy.mensagemConfirmacao();
    cy.verificarQuantidade(4, true);
  }

  fluxoDoPedidoTotal() {
    this.comprarProdutos();
    this.accessCheckout();

    this.finalizarProdutos()
    this.confirmacaoCompra()
  }
}

export default new FluxoDoPedido();
