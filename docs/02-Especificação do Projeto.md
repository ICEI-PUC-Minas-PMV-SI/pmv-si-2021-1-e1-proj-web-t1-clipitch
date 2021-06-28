<div align="justify">

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
|Usuário|Encontrar os clipes relacionados a seu conteúdo de interesse.|Encontrar os clipes mais acessados, de maneira mais rápida.|

Segundo pesquisa realizada no site da Design Culture, a plataforma do Twitch atualmente conta com mais de 32 milhões de usuários ativos por mês, sendo a maioria do seu público relativamente jovem, entre 18 e 34 anos<sup>[[5]]</sup>. Dessa forma, como o público alvo da aplicação a ser desenvolvida está em uma faxa etária jovial, vale lembrar que a maioria é adepta às mais recentes tecnologias no mercado, como os dispositivos mobile. Consta, assim, que será desenvolvido uma aplicação que suporte a responsividade para que possa ser acessível em qualquer lugar e a qualquer hora, economizando tempo do usuário, uma vez que o sistema tem como objetivo a distribuição dos clipes que visam demonstrar uma pequena parte do material bruto existente no Twitch.

### **Exemplo de usuário**
Alan é um criador de conteúdos que produz entretenimentos no meio digital, como vídeos e lives de jogos. Além de ser um criador de conteúdo, ele também é um consumidor assíduo de outros produtores do seu ramo de trabalho. Todavia, Alan passa mais de 8 horas por dia trabalhando e as outras horas cuidando dos seus afazeres diários, sobrando muito pouco tempo para se atualizar sobre o mercado em que está inserido. Enquanto Alan, eu gostaria de ter um local que pudesse me atualizar mais rápido ao que o mercado exige no momento. Dessa forma, o Alan, então, procura por uma plataforma na qual possa se atualizar e que seja de maneira rápida, sem tomar muito tempo do seu dia. É quando ele encontrará nosso portal, que vai ter os principais clipes dos contéudos mais relevantes no momento e que será sempre atualizado pelo nosso time de desenvolvimento, que servirá de referência para o mesmo se atualizar em seu mercado de trabalho, auxiliando no seu sucesso profissional.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | História do Usuário | Descrição do Requisito | Prioridade |
|------|---------------------|------------------------|------------|
|RF-001 | Alan acessa o site em busca de clips. | O site vai estar disponível para todos os browsers sem necessidade de login. | ALTA |
|RF-002 | Alan vai até o campo de busca do site para tentar achar algum vídeo novo. | No site vai existir um campo visível na parte de cima da tela com a palavra: “Pesquisar por” | ALTA |
|RF-003 | Após achar o vídeo desejado, Alan aperta o play | O site vai ser capaz de rodar os vídeos de forma embutida. | ALTA |
|RF-004 | Após a escolha do vídeo, Alan vai poder escolher o volume e o tamanho da tela. | O site deverá incorporar as funcionalidades de tela do Twitch como pause e tamanho de tela | ALTA |
|RF-005 | Alan na home do site escolhe qualquer vídeo de forma rápida e prática. | O site vai disponibilizar em sua home os clipes mais acessados no momento e aqueles de maior sucesso. | ALTA |
|RF-006 | Alan está sem tempo e quer apenas dar “uma olhada” no que está no top do dia. | O site deve ser capaz de disponibilizar uma parte com os melhores clipes do dia. | ALTA |
|RF-007 | Alan está curioso para saber quais foram os clipes mais vistos da semana. | O site vai ser capaz de disponibilizar os clipes mais vistos da semana. | ALTA |
|RF-008 | Alan faz a busca por títulos. | O site deve ser capaz de exibir os conteúdos da plataforma Twitch usando como filtro os títulos dos jogos. | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O portal deverá ter alta disponibilidade em 99% do tempo | ALTA |
|RNF-002| O frontend deve ser desenvolvido em HTML, CSS e JavaScript | ALTA |
|RNF-003| Deve respeitar a Lei Geral de Proteção de Dados (LEI Nº 13.709, DE 14 DE AGOSTO DE 2018) | ALTA |
|RNF-004| Deve se comunicar com backend através de API, respeitada a OpenAPI Specification | ALTA |
|RNF-005| Deve suportar alto volume de acessos à plataforma | ALTA |
|RNF-006| Deve usar arquitetura em camadas para desacoplamento | ALTA |
|RNF-007| Deve usar design responsivo nas interfaces gráficas para rodar em um dispositivos móvel | MÉDIA | 
|RNF-008| Deve ser acessível a partir de qualquer browser | MÉDIA |
|RNF-009| Deve processar requisições do usuário em no máximo 2s |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------| 
|01| O orçamento disponível, no montante de R$2000,00 (dois mil reais) deverá cobrir todos os custos, salvo aqueles causados por eventos imprevisíveis, mediante a devida justificativa, que acarretem um aumento de até 25% do valor original do projeto|
|02| Em caso de alteração de membros da equipe, a mesma deverá ser objeto de recomposição por profissionais de qualificação compatível com o projeto no prazo de até 7 (sete) dias corridos|
|03| O projeto deverá se submeter ao ordenamento jurídico brasileiro, destacando-se a conformidade com a Lei Geral de Proteção de Dados (Lei n.º 13.709/18), Lei da Propriedade Industrial (Lei n.º 9.279/96), Lei dos Direitos Autorais (Lei n.º 9.640/98) e Lei do Software (Lei n.º 9.609/98) |</div>

<hr>

<p align="right"><a href="docs/01-Documentação de Contexto" rel="docs">Documentação de Contexto</a> | <a href="docs/03-Metodologia" rel="docs">Metodologia</a></p>
