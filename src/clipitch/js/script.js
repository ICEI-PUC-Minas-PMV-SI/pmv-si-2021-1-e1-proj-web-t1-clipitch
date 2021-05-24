import criaBancoDeDados from './banco.js';

// Constantes, Parâmetros e Funções Necessárias para Requisição da API do Twitch e Armazenamento dos Dados

const URL_AUTH = "https://id.twitch.tv/oauth2/token";
const URL_CLIPS = "https://api.twitch.tv/kraken/clips/top";
const LIMIT = 100;
const CLIENT_ID = "j1c6sfsv12hl349hh871nneegu8frw";
const CLIENT_SECRET = "46wet0fcatmo14q5ccj1cbpufbcr7d";

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

const HEADERS_CLIPS = {
  Accept: "application/vnd.twitchtv.v5+json",
  "Client-ID": CLIENT_ID,
};

const PARAMS_CLIPS = {
  channel: null,
  cursor: null,
  game: null,
  language: null,
  limit: LIMIT,
  period: "day",
  trending: true,
};

// Realiza a autenticação para obter o token de acesso da API V5 (Twitch.tv)
const conectaTwitch = () => {
  fetch(URL_AUTH, PARAMS_AUTH)
    .then((res) => res.json())
    .then((res) => {
      const access_token = res.access_token;
      getTwitchDados(access_token, PARAMS_CLIPS);
    })
    .catch((err) => {
      console.log("Erro ao autenticar!!!", err);
    });
};

// Realiza a chamada da API Top Clips do Twitch
const getTwitchDados = (auth_token, params) => {
  const clipsData = [];
  fetch(URL_CLIPS, {
    method: "GET",
    headers: HEADERS_CLIPS,
  })
    .then((res) => res.json())
    .then((topClips) => {
      clipsData.push(...topClips.clips);
      
      criaBancoDeDados(clipsData);
      /**clipsData.map((clip) => {
        localStorage.setItem("broadcast_id", clip.broadcast_id);
        localStorage.setItem("created_at", clip.created_at);
      });*/

    }).catch((err) => {
      console.log("Erro ao obter clips", err);
    });
};

document.addEventListener("DOMContentLoaded",conectaTwitch);

export default { conectaTwitch, getTwitchDados };

