# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base nos critérios de desenvolvimento do projeto e do público alvo a ser alcançado, foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Segundo pesquisa realizada no site da Design Culture, a plataforma da Twitch, atualmente, conta com mais de 32 milhões de usuários ativos por mês, sendo, a maioria do seu público relativamente jovem, entre 18 e 34 anos. Dessa forma, como o público alvo da aplicação a ser desenvolvida está em uma faxa etária jovial, vale lembrar que a maioria é adepta às mais recentes tecnologias no mercado, como os dispositivos mobile. Consta, assim, que será desenvolvido uma aplicação que suporte a responsividade para que possa ser acessível em qualquer lugar e a qualquer hora, economizando tempo do usuário, uma vez que o sistema tem como objetivo a distribuição dos "clipes" que visam demonstrar uma pequena parte do material bruto existente na Twitch.

> **Links Úteis**:
> “Alan é um criador de conteúdos que produz entretenimentos no meio digital, como vídeo e lives de jogos. Além de ser um criador de conteúdo, ele também é um consumidor assíduo de outros produtores do seu ramo de trabalho. Todavia, Alan passa mais de 8 horas por dia trabalhando e as outras horas cuidando dos seus a fazeres diários, sobrando muito pouco tempo para se atualizar sobre o mercado em que está inserido. Enquanto Alan, eu gostaria de ter um local que pudesse me atualizar mais rápido ao que o mercado exige no momento. Dessa forma, o Alan, então, procura por uma plataforma aonde possa se atualizar e que seja de maneira rápida, sem tomar muito tempo do seu dia. É quando ele encontrará nosso portal, que vai ter os principais "clipes" dos contéudos mais relevantes no momento e que será sempre atualizado pelo nosso time de desenvolvimento, que servirá de referência para o mesmo se atualizar em seu mercado de trabalho, auxiliando no seu sucesso profissional.”

> **Links Úteis**:
> - [Design Culture - Alcançe da plataforma Twitch](https://designculture.com.br/como-as-marcas-estao-usando-o-twitch-no-seu-marketing#:~:text=Hoje%2C%20a%20maior%20parte%20do,mulheres%20est%C3%A3o%20aderindo%20%C3%A0%20plataforma.)


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
