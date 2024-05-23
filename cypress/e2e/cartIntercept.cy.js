describe("Teste de Listagem de Produtos", () => {
  beforeEach(() => {
    cy.acessarAplicativo();
    cy.acessarAreaLogin();
    cy.preencherDadosLogin();
  });

  it("adicionar, remover e atualizar produtos fake no carrinho fake", () => {
    cy.intercept("GET", "**/public/getCart?userId=663d7e277294efad05afd1f8", {
      fixture: "cart.fake.json",
    }).as("cartProducts");

    cy.get(
      '[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .css-175oi2r > .css-146c3p1',
    ).should("have.text", "2");

    cy.get(
      '[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr',
    ).click();

    cy.get(
      '[style="justify-content: space-between; flex-grow: 1;"] > :nth-child(1) > :nth-child(3)',
    );

    cy.get('[data-testid="remove"]').first().click();

    cy.get('[href="/Tab/Home"]').click();

    cy.get(
      '[data-testid="home-popular-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(1) > [style="margin: 5px 7px; border-color: rgb(128, 128, 128); border-width: 0.5px; border-radius: 15px; width: 414px;"] > [data-testid="productDetails"] > .r-cqee49',
    ).click();
    cy.get('[data-testid="addToCart"]').click()

    cy.intercept("GET", "**/public/getCart?userId=663d7e277294efad05afd1f8", {
      fixture: "updatedCart.json",
    }).as("updatedCart");

  });
});
