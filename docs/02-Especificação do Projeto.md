# Especificações do Projeto

## Personas

Alan, 24 anos: é solteiro e um criador autônomo de conteúdo de entretenimento focado em jogos.

Ele possui um perfil pragmático e sempre busca aprimorar-se profissionalmente para alavancar a sua carreira. Por conta dos seus estudos, não tem muito tempo livre.

A fim de descontrair-se após um longo dia de trabalho e estudo, tenta aproveitar o seu pouco tempo disponível para assistir vídeos curtos sobre o mundo geek - principalmente conteúdo relacionado a jogos. Para isso, ele acessa websites como Twitch e YouTube.

Entretanto, Alan passa uma quantia considerável de tempo buscando por esse tipo de conteúdo em plataformas distintas. Dessa forma, o seu tempo não é aproveitado de maneira eficiente.

## Histórias de Usuários

Com base nos critérios de desenvolvimento do projeto e do público alvo a ser alcançado, foram identificadas as seguintes histórias de usuários:

|`PERSONA`|`FUNCIONALIDADE` |`MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário.|Encontrar os clipes relacionados a seu conteúdo de interesse.|Encontrar os clipes desejados, conforme especificações de interesse desejadas.|
|Anunciante.|Obter relatórios que demonstrem quais as melhores áreas de divulgação dentro da Twitch.|Divulgar seus produtos através da plataforma, na categoria que mais teve resultado de pesquisas dentro do portal a ser desenvolvido, visando um retorno monetário maior de suas publicidades.|

Segundo pesquisa realizada no site da Design Culture, a plataforma da Twitch, atualmente, conta com mais de 32 milhões de usuários ativos por mês, sendo, a maioria do seu público relativamente jovem, entre 18 e 34 anos. Dessa forma, como o público alvo da aplicação a ser desenvolvida está em uma faxa etária jovial, vale lembrar que a maioria é adepta às mais recentes tecnologias no mercado, como os dispositivos mobile. Consta, assim, que será desenvolvido uma aplicação que suporte a responsividade para que possa ser acessível em qualquer lugar e a qualquer hora, economizando tempo do usuário, uma vez que o sistema tem como objetivo a distribuição dos "clipes" que visam demonstrar uma pequena parte do material bruto existente na Twitch.

#### **Exemplos de usuários:**
> “Alan é um criador de conteúdos que produz entretenimentos no meio digital, como vídeo e lives de jogos. Além de ser um criador de conteúdo, ele também é um consumidor assíduo de outros produtores do seu ramo de trabalho. Todavia, Alan passa mais de 8 horas por dia trabalhando e as outras horas cuidando dos seus a fazeres diários, sobrando muito pouco tempo para se atualizar sobre o mercado em que está inserido. Enquanto Alan, eu gostaria de ter um local que pudesse me atualizar mais rápido ao que o mercado exige no momento. Dessa forma, o Alan, então, procura por uma plataforma aonde possa se atualizar e que seja de maneira rápida, sem tomar muito tempo do seu dia. É quando ele encontrará nosso portal, que vai ter os principais "clipes" dos contéudos mais relevantes no momento e que será sempre atualizado pelo nosso time de desenvolvimento, que servirá de referência para o mesmo se atualizar em seu mercado de trabalho, auxiliando no seu sucesso profissional.”

> **Links Úteis**:
> - [Design Culture - Alcançe da plataforma Twitch](https://designculture.com.br/como-as-marcas-estao-usando-o-twitch-no-seu-marketing#:~:text=Hoje%2C%20a%20maior%20parte%20do,mulheres%20est%C3%A3o%20aderindo%20%C3%A0%20plataforma.)


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | História do Usuário | Descrição do Requisito | Prioridade |
|------|---------------------|------------------------|------------|
|RF-001| Alan acessa o site em busca de Clips. | O site vai estar disponível para todos os browsers sem necessidade de login. | ALTA |
|RF-002| Alan vai até o campo de busca do site para tentar achar algum vídeo novo. | No site vai existir um campo visível na parte de cima da tela com a palavra: “Pesquisar por” | ALTA |
|RF-003| Alan faz a busca por títulos. | O site deve ser capaz de exibir os conteúdos da plataforma twitch usando como filtro os títulos dos jogos. | ALTA |
|RF-004| Após achar o vídeo desejado Alan aperta o play | O site vai ser capaz de rodar os vídeos de forma embutida. | ALTA |
|RF-005| Após a escolha do vídeo, Alan vai poder escolher o volume e o tamanho da tela. | O site deverá incorporar as funcionalidades de tela do twitch como pause e tamanho de tela | ALTA |
|RF-006| Alan na home do site escolhe qualquer vídeo de forma rápida e prática. | O site vai disponibilizar em sua Home os clipes mais acessados no momento e aqueles de maior sucesso. | ALTA |
|RF-007| Alan está sem tempo e quer apenas dar “uma olhada” no que está no top do dia. | O site deve ser capaz de disponibilizar uma parte com os melhores clipes do dia. | ALTA |
|RF-008| Alan está curioso para saber quais foram os clipes mais vistos da semana. | O site vai ser capaz de disponibilizar os clipes mais vistos da semana. | ALTA |
|RF-009| Alan fecha o site e quando voltar a página inicial exibirá um conteúdo coerente com suas últimas visitas. | O site vai ser capaz de exibir o conteúdo na página inicial usando o histórico de visitas do usuário. | MEDIA |


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
|01| O orçamento disponível, no montante de R$2000,00 (dois mil reais) deverá cobrir todos os custos, salvo aqueles causados por eventos imprevisíveis, mediante a devida justificativa, que acarretem um aumento de até 25% do valor original do projeto|
|02| Em caso de alteração de membros da equipe, a mesma deverá ser objeto de recomposição por profissionais de qualificação compatível com o projeto no prazo de até 7 (sete) dias corridos|
|03| O projeto deverá se submeter ao ordenamento jurídico brasileiro, destacando-se a conformidade com a Lei Geral de Proteção de Dados (Lei n.º 13.709/18), Lei da Propriedade Industrial (Lei n.º 9.279/96), Lei dos Direitos Autorais (Lei n.º 9.640/98) e Lei do Software (Lei n.º 9.609/98) |
 

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
