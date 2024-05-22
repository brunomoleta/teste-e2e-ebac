Feature: Login
Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma
Para visualizar meus pedidos

Background:
Dado que o usuário está na página de Inicial

Scenario: Registro com dados válidos efetuado com sucesso
  Given você acessa no formulário de registro
  When você insere dados de registro válidos
  Then você é direcionado à página inicial

  Scenario: Registro com email já cadastrado efetuado sem sucesso
  Given você acessa no formulário de registro
  When você insere dados já existentes
  Then você não consegue fazer o registro e aparece mensagem de erro
