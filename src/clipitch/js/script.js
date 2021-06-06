import criaBancoDeDados from "./banco.js";


// Constantes, Parâmetros e Funções Necessárias para Requisição da API do Twitch e Armazenamento dos Dados
const URL_AUTH = "https://id.twitch.tv/oauth2/token";
const URL_CLIPS = "https://api.twitch.tv/kraken/clips/top";
const LIMIT = 100;
const CLIENT_ID = "j1c6sfsv12hl349hh871nneegu8frw";
const CLIENT_SECRET = "4bvj20srxq1dxrtzid7szsobm3jbcl";

// Cabeçalho necessário para autenticação e obtenção do Token
const PARAMS_AUTH = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Origin: "",
  },
  body: JSON.stringify({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: "client_credentials",
  }),
};

// Cabeçalho necessário para obtenção dos clips
const HEADERS_CLIPS = {
  Accept: "application/vnd.twitchtv.v5+json",
  "Client-ID": CLIENT_ID,
};

// Parâmetros opcionais para customização na busca dos dados da API do Twitch
const PARAMS_CLIPS = {
  first: 0,
  after: null,
  limit: LIMIT,
  period: "week",
  trending: true,
};

// Realiza a autenticação para obter o token de acesso da API V5 (Twitch.tv)
const conectaTwitch = () => {
  fetch(URL_AUTH, PARAMS_AUTH)
    .then((res) => res.json())
    .then((res) => {
      const access_token = res.access_token;
      console.log(res)

      //Executa a função que obtém os clips do Twitch
      getTwitchDados(access_token, URL_CLIPS, PARAMS_CLIPS);
    })
    .catch((err) => {
      console.log("Erro ao autenticar!!!", err);
    });
};

// Realiza a chamada da API Top Clips do Twitch
const getTwitchDados = (token, url, params) => {
  const clipsData = [];

  url += "?" + new URLSearchParams(params).toString();

  console.log(url);

  fetch(url, {
    method: "GET",
    headers: HEADERS_CLIPS,
  })
    .then((res) => res.json())
    .then((topClips) => {
      console.log(topClips);
      clipsData.push(...topClips.clips);
      criaBancoDeDados(clipsData);
    })
    .catch((err) => {
      console.log("Erro ao obter clips", err);
    });
};

document.addEventListener("DOMContentLoaded", conectaTwitch)

export default { conectaTwitch, getTwitchDados };

