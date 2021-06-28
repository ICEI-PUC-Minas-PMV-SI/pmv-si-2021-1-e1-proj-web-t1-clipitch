<div align="justify">

# Registro de Testes de Software

Relatório dos testes executados no projeto:

![exemploTestes](img/executeTestes.png)

Os testes podem ser acessados em [produção](https://clipitch.herokuapp.com/mocha/test/test.html). O <a href="08-Plano de Testes de Software.md">Plano de Testes de Software</a> disponibiliza a explicação detalhada da implementação dos testes de software realizados durante o desenvolvimento do projeto.
## Avaliação

Todos os métodos desenvolvidos no projeto passaram nos testes, como pode ser observado acima. Todavia, existem algumas limitações para testar-se métodos sem retorno de dados. Dessa forma, optou-se pela utilização do Sinon JS em conjunto com o Mocha JS, para simular uma chamada sem retorno e conferir se ela foi de fato executada - se o mesmo ocorre, é retornado o valor true como resposta, sendo exibido no HTML como "teste realizado com sucesso".</div>

<hr>

<p align="right"><a href="./08-Plano de Testes de Software.md">Plano de Testes de Software</a> | <a href="./10-Plano de Testes de Usabilidade.md">Plano de Testes de Usabilidade</a></p>
