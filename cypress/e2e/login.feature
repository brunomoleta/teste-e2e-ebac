Feature: Login
Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma
Para visualizar meus pedidos

Background:
Dado que o usuário está na página de Login

Scenario: Login feito com dados válidos efetuado com sucesso
When você insere dados de login válidos
Then você é direcionado a página de checkout

#Scenario: Login não permitido, foi enviado email inválido
#When usuário enviar uma requisição com email que não existe no banco de dados
#Then usuário permanece na mesma página e aparece uma mensagem de erro
#
#Scenario Template: Login não permitido pois foi enviado senha incorreta
#When usuário enviar <email> e <senha_invalida>
#Then usuário permanece na mesma página e aparece uma mensagem de erro
#
#Examples:
#| email              | senha_invalida     |
#| roena@gmail.com    | senha_errada       |