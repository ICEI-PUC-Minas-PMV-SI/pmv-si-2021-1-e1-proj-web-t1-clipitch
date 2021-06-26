# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="04-Projeto de Interface.md"> Projeto de Interface</a>

Com o intuito de melhorar a distribuição, garantir a qualidade e obter certeza da implementação correta do desenvolvimento feito no software do projeto, foi utilizado frameworks e bibliotecas que permitem simular todo o processo de usabilidade do ClipItch, percorrendo as chamadas que serão feitas nesse processo e retornando os valores esperados, de forma discreta e certeira.

Dessa forma, os testes podem ser acessados em produção pelo seguinte link:
[Testes de Software | ClipItch](https://clipitch.herokuapp.com/mocha/test/test.html)

## Ferramentas de Testes

Para o cenário de testes foram utilizados os seguintes frameworks e biliotecas:

- [Mocha JS](https://mochajs.org/)
- [Chai JS](https://www.chaijs.com/)
- [Sinon JS](https://sinonjs.org/)

No repositório, foi incluído o seguinte cenário na estrutura do código, para que fosse efetuado os testes:

![estruturaTestes](img/estruturaTestes.png)

Dentro da pasta Test, é possível encontrar uma estrutura de interface e uma de modelagem dinâmica que é feita por Javascript, essa estrutura tem o intuito de fazer a chamada de cada função desenvolvida no ClipItch e retornar em um formato HTML, com respostas em tempo real, como pode ser notado abaixo:

![exemploTestes](img/executeTestes.png)

Essas chamadas são feitas dentro do arquivo Test.js, aonde é feito todo o processo de chamadas no banco e nos scripts criados para o funcionamento do projeto, ela é responsável por retornar esses dados e atráves das chamadas feitas com as bibliotecas Chai e Sinon, sendo essas implementadas juntamente ao Framework Mocha JS, foi desenvolvido o seguinte formato de teste:

![exemploTestesJS](img/testeMocha.png)

#### Explicação dos métodos

```mocha.js|chai.js|sinon.js - Describe
  describe("Descreve todas as funções do projeto", () => { Métodos de Testes a serem implementados };
```

> A função describe, serve para iniciar uma lista detalhada do que será executado dentro da arrow function chamada pela mesma.

```mocha.js|chai.js|sinon.js - It
  it("Realiza a chamada da função retornada de algum outro arquivo js ou do próprio arquivo", () => {
      spy.calledAfter( Função a ser testada );      
    });
```

> A função it inicializa o processo de teste e aguarda a função realizada pela arrow function ser retornada, podendo, assim, analizar se foi executada com sucesso ou se conteve algum erro. Todavia, como grande parte das functions feitas no desenvolvimento são chamadas void (sem retorno), teve de ser utilizada a biblioteca Sinon para poder fazer o processo de "espionagem" da função quando ela é chamada, que retorna o valor true caso seja feito com sucesso.
