# Especificações do Projeto

## Personas

Alan, 24 anos: é solteiro e um criador autônomo de conteúdo de entretenimento focado em jogos.

Ele possui um perfil pragmático e sempre busca aprimorar-se profissionalmente para alavancar a sua carreira. Por conta dos seus estudos, não tem muito tempo livre.

A fim de descontrair-se após um longo dia de trabalho e estudo, tenta aproveitar o seu pouco tempo disponível para assistir vídeos curtos sobre o mundo geek - principalmente conteúdo relacionado a jogos. Para isso, ele acessa websites como Twitch e YouTube.

Entretanto, Alan passa uma quantia considerável de tempo buscando por esse tipo de conteúdo em plataformas distintas. Dessa forma, o seu tempo não é aproveitado de maneira eficiente.

## Histórias de Usuários

Com base nos critérios de desenvolvimento do projeto e do público alvo a ser alcançado, foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário interessado em assistir os “clipes” de lives do Twitch|Encontrar um portal intuitivo, e, que apresenta os clipes relacionados a seu conteúdo de interesse.|Encontrar os clipes desejados, conforme especificações de interesse desejadas.|
|Administrador do portal|Manter a aplicação Web atualizada, alterar permissões e gerir a funcionalidade do site de maneira geral.|Permitir que possam administrar contas e conceder as devidas melhorias a aplicação.|

Segundo pesquisa realizada no site da Design Culture, a plataforma da Twitch, atualmente, conta com mais de 32 milhões de usuários ativos por mês, sendo, a maioria do seu público relativamente jovem, entre 18 e 34 anos. Dessa forma, como o público alvo da aplicação a ser desenvolvida está em uma faxa etária jovial, vale lembrar que a maioria é adepta às mais recentes tecnologias no mercado, como os dispositivos mobile. Consta, assim, que será desenvolvido uma aplicação que suporte a responsividade para que possa ser acessível em qualquer lugar e a qualquer hora, economizando tempo do usuário, uma vez que o sistema tem como objetivo a distribuição dos "clipes" que visam demonstrar uma pequena parte do material bruto existente na Twitch.

#### **Exemplos de usuários:**
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
|RNF-001| O portal deverá ter alta disponibilidade em 99% do tempo | ALTA |
|RNF-002| O frontend deve ser desenvolvido em HTML, CSS e JavaScript | ALTA |
|RNF-003| Deve respeitar a Lei Geral de Proteção de Dados (LEI Nº 13.709, DE 14 DE AGOSTO DE 2018) | ALTA |
|RNF-004| Deve se comunicar com backend através de API, respeitada a OpenAPI Specification | ALTA |
|RNF-005| Deve suportar alto volume de acessos à plataforma | ALTA |
|RNF-006| Deve usar arquitetura em camadas para desacoplamento | ALTA |
|RNF-007| O banco de dados deverá armazenar informações do usuário criptogradas |  ALTA | 
|RNF-008| O portal deverá permitir acesso apenas com uso de senhas com no mínimo 8 caracteres, símbolos e números |  ALTA | 
|RNF-009| Deve usar design responsivo nas interfaces gráficas para rodar em um dispositivos móvel | MÉDIA | 
|RNF-010| Deve ser acessível a partir de qualquer browser | MÉDIA |
|RNF-011| O portal deverá armazenar o nome e sobrenome em campos separados no banco de dados | MÉDIA |
|RNF-012| Deve processar requisições do usuário em no máximo 2s |  BAIXA | 



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
|03| O orçamento disponível, no montante de R$2000,00 (dois mil reais) deverá cobrir todos os custos, salvo aqueles causados por eventos imprevisíveis, mediante a devida justificativa, que acarretem um aumento de até 25% do valor original do projeto|
|03| Em caso de alteração de membros da equipe, a mesma deverá ser objeto de recomposição por profissionais de qualificação compatível com o projeto no prazo de até 7 (sete) dias corridos|
|04| O projeto deverá se submeter ao ordenamento jurídico brasileiro, destacando-se a conformidade com a Lei Geral de Proteção de Dados (Lei n.º 13.709/18), Lei da Propriedade Industrial (Lei n.º 9.279/96), Lei dos Direitos Autorais (Lei n.º 9.640/98) e Lei do Software (Lei n.º 9.609/98) |
 

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
