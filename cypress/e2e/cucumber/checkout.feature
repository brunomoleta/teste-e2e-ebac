Feature: Login
  Como cliente da EBAC-SHOP
  Quero fazer o checkout do carrinho de compras
  Para finalizar meu pedido

  Background:
  Dado que o usuário está na página de Inicial

  Scenario: Compra realizada com sucesso
    Given você loga na conta do usuário
    When você insere produtos no carrinho
    Then você visualiza a ordem de compra com sucesso
