<div align="justify">

# Introdução

Com o desenvolvimento da tecnologia, algumas soluções surgiram para trazer o entretenimento de forma mais dinâmica e informal. Nesse contexto, surge o Twitch, plataforma de streaming que veio para ficar, ganhando cada vez mais popularidade entre os internautas, principalmente entre o público de gamers. O Twitch possui uma gama completa de conteúdos para todos os gostos, vendida em 2014 por 970 milhões de dólares, a plataforma demonstra um crescimento exponencial e, em virtude de suas diretrizes mais flexíveis de copywriting, vem competindo na linha de frente com outras gigantes do ramo como o YouTube.
Assim sendo, percebe-se um crescimento da comunidade de usuários do Twitch. Existe, por exemplo, um grande volume de “clipes”, que são pequenos trechos de uma live produzida no Twitch. Atualmente, esses clipes são postados no próprio Twitch ou no Youtube, inexistindo uma plataforma que elenque os melhores clipes da plataforma. Esses clipes chamam muita a atenção por serem conteúdos mais dinâmicos e chamativos, motivos que fazem desse formato um dos mais acessados no YouTube.

Visando todo o potencial comercial do produto, e observando a inexistência de plataformas que oferecem esse tipo de proposta, o conceito do projeto é criar uma plataforma de conteúdo audiovisual focada em fornecer os melhores clipes feitos pelos usuários da Twitch, elencando também os mais acessados. Além disso, criar um sistema para sugerir outros clipes semelhantes aos buscados pelo usuário. Portanto, o público-alvo são as pessoas que consomem ou têm interesse em assistir os melhores clipes da plataforma.
## Problema

Segundo matéria disponibilizada no site de notícias PwC Brasil, o setor de entretenimento virtual vem demonstrando uma perspectiva de aumento que agregará uma receita de aproximadamente 43,7 bilhões de dólares somente no Brasil no decorrer do ano de 2021<sup>[[1]]</sup>. Considerando ainda o atual cenário pandêmico, as plataformas de transmissão de dados pela internet, principalmente aúdio e vídeo, sem a necessidade de baixar o conteúdo, serviços esses conhecidos como "streaming", adquiriram maior protagonismo e relevância. No caso das transmissões de jogos, a alta demanda pelos serviços pode ser comprovada pela pesquisa feita no site live.tt<sup>[[2]]</sup>, que consatatou que a plataforma Twitch obteve um crescimento de 120% ao decorrer de 12 meses.

Não obstante o atual cenário caracterizado pela alta demanda de serviços de streaming e considerando a enorme quantidade de conteúdo que se propaga nas principais aplicações, como o YouTube e o Twitch, esse focado em jogos, os serviços são esparsos e desorganizados, fenômeno que faz com que muitos conteúdos de tais plataformas digitais permaneçam ocultos do conhecimento público. Mesmo com um crescimento tão significante, plataformas como o Twitch possuem um déficit de escalabilidade quando se trata de gerenciar o conteúdo que produzem e distribuí-los conforme o gosto dos usuários.

Portanto, a proposta tem por objetivo sanar a assimetria de informações existente entre o lado da oferta e da demanda, referente à plataforma Twitch, o que resultará em maior eficiência na forma como as transmissões de jogos são consumidas pelos usuários finais.

[1]: https://live.tt/pt/feeed/a-pandemia-os-games-e-o-crescimento-da-twitch/
[2]: https://www.pwc.com.br/pt/sala-de-imprensa/noticias/pwc-mercado-global-midia-entretenimento-movimentar-17.html/
## Objetivos

### Objetivo Geral

O objetivo deste trabalho é desenvolver um portal que forneça clipes de lives do Twitch classificados, organizados e categorizados de acordo com o perfil e interesse dos usuários.

### Objetivos Específicos

Centralizar em uma única página as visualizações de clipes de lives do Twitch utilizando um conjunto de APIs disponibilizadas pelo site. A página restringirá-se exclusivamente a clipes disponibilizados pelos criadores de conteúdo do Twitch, ficando restrito o compartilhamento de qualquer conteúdo (como, por exemplo: transmissões de lives e/ou o compartilhamento do conteúdo inteiro).

* Criar uma aplicação que faz atualizações em tempo real dos clipes mais visualizados;
* Utilizar as ferramentas disponibilizadas em https://dev.twitch.tv/docs/api/reference#get-clips;
* Utilizar ferramentas de desenvolvimento web e frameworks para a criação de um frontend responsivo.

## Justificativa

De acordo com artigo sobre estatísticas de uso e crescimento do Twitch escrito em janeiro de 2021, a plataforma apresenta 140 milhões de usuários únicos por mês<sup>[[3]]</sup>. Brasileiros compõem 4.08% desse público<sup>[[4]]</sup>, ou seja, cerca de 5 milhões de usuários únicos por mês.

Apesar do alcance gigantesco, o Twitch não atende a um certo nicho de usuários. Em sua página inicial, a plataforma evidencia apenas canais recomendados, cujos conteúdos muitas vezes ultrapassam horas de duração. Por conta disso, ocorre a situação na qual dois tipos de usuário são prejudicados - o que não possui tempo disponível o suficiente para assistir a várias horas seguidas de conteúdo e o que não está disposto a comprometer-se a dedicar tanto tempo do seu dia para consumir aquele entretenimento. Esses usuários, então, encontram-se obrigados a procurar pelo próprio Twich e em outros serviços trechos desses conteúdos.

A motivação para a criação deste projeto é desenvolver uma solução web que seja capaz de prover a esses usuários a capacidade de consumir uma diversa gama de clipes da plataforma Twitch. O usuário poderá acessar os clipes mais visualizados e filtrá-los de acordo com o seu interesse. Cria-se uma nova maneira de consumir o conteúdo provido pelo Twitch de maneira que atende a esse nicho de usuários de forma eficiente.

[3]: https://backlinko.com/twitch-users#monthly-active-users
[4]: https://backlinko.com/twitch-users#twitch-users-by-country

## Público-Alvo

Homens e mulheres, de 16 a 34 anos, casados ou solteiros, com ou sem filhos, ensino médio a superior completo, pertencentes à classe média ou acima, brasileiros, moradores de cidades pequenas a grandes, atentos às novidades relativas ao mundo da tecnologia, sem muito tempo livre disponível, interessados em entretenimento sobre jogos e outros assuntos em formato de clipes de curta duração.</div>

<hr>

<p align="right"><a href="docs/02-Especificação do Projeto.md">Especificação do Projeto</a></p>