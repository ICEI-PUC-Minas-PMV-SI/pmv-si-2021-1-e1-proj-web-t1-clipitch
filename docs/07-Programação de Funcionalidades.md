# Programação de Funcionalidades

## Estruturas de dados

Foram desenvolvidos três arquivos no formato `.js`: `banco.js` contém os métodos para a manipulação do banco de dados, disposição dos clips nas páginas da aplicação e pesquisa; `script.js` é responsável por autenticar o acesso da aplicação web à API do Twitch, criação do banco de dados, filtros de pesquisa e interatividade das páginas HTML; `search.js` trata a chamada ao método de filtragem de pesquisa.

Em todos esses arquivos utilizou-se as estruturas de dados básicas da programação: estruturas sequenciais, condicionais e de repetição. O uso de vetores também foi bastante presente. Como essas estruturas de dados foram usadas em basicamente todos os arquivos JavaScript do projeto, decidiu-se abordar esse assunto neste tópico ao invés de citá-lo de forma redundante no tópico relacionado às funcionalidades do sistema.

Outra estrutura de dados importantíssima que foi processada pela aplicação web é um arquivo no formato JSON provido pela API do Twich com diversas informações sobre um clip. Abaixo, encontra-se um exemplo dessa estrutura de dados:

```json
{
  "slug": "AmazonianEncouragingLyrebirdAllenHuhu",
  "tracking_id": "13160765",
  "url": "https://clips.twitch.tv/AmazonianEncouragingLyrebirdAllenHuhu?tt_medium=clips_api&tt_content=url",
  "embed_url": "https://clips.twitch.tv/embed?clip=AmazonianEncouragingLyrebirdAllenHuhu&tt_medium=clips_api&tt_content=embed",
  "embed_html": "<iframe src='https://clips.twitch.tv/embed?clip=AmazonianEncouragingLyrebirdAllenHuhu&tt_medium=clips_api&tt_content=embed' width='640' height='360' frameborder='0' scrolling='no' allowfullscreen='true'></iframe>",
  "broadcaster": {
    "id": "12826",
    "name": "twitch",
    "display_name": "Twitch",
    "channel_url": "https://www.twitch.tv/twitch",
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/twitch-profile_image-8a8c5be2e3b64a9a-300x300.png"
  },
  "curator": {
    "id": "59222117",
    "name": "skiptoplay",
    "display_name": "SkipToPlay",
    "channel_url": "https://www.twitch.tv/skiptoplay",
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/skiptoplay-profile_image-1d66e001a46b0c9d-300x300.png"
  },
  "vod": {
    "id": "107049351",
    "url": "https://www.twitch.tv/videos/107049351?t=0s"
  },
  "game": "",
  "language": "en",
  "title": "Clip Title Editing",
  "views": 106,
  "duration": 32.000333,
  "created_at": "2016-12-14T16:28:49Z",
  "thumbnails": {
    "medium": "https://clips-media-assets.twitch.tv/vod-107049351-offset-26-preview-480x272.jpg",
    "small": "https://clips-media-assets.twitch.tv/vod-107049351-offset-26-preview-260x147.jpg",
    "tiny": "https://clips-media-assets.twitch.tv/vod-107049351-offset-26-preview-86x45.jpg"
  }
}
```

## Funcionalidades do sistema

Todas as funcionalidades implementadas estão diretamente relacionadas aos requisitos funcionais listados no planejamento do projeto. A tabela completa de requisitos funcionais e não funcionais pode ser encontrada na [especificação do projeto](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2021-1-e1-proj-web-t1-conteudo-de-interesse/edit/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md).

### O site vai estar disponível para todos os browsers sem necessidade de login (RF-001)

A aplicação web não requere cadastro para ser utilizada.

### No site vai existir um campo visível na parte de cima da tela com a palavra: “Pesquisar por” (RF-002)

A aplicação web apresenta cinco páginas distintas: index (home), clips do dia, clips da semana, resultado da pesquisa e erro. Em todas essas páginas um campo de busca foi implementado na barra de navegação que encontra-se na parte superior do site.

Os códigos responsáveis por essa funcionalidade encontram-se nos arquivos `banco.js`, `script.js` e `search.js`.





---
Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo