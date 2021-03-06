import criaBancoDeDados from "./banco.js";
import { pesquisaClips } from "./banco.js";

//Estilização dos html
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 550); //Aplica a cor do nav ao fazer o scroll em um tempo determinado de 550 mls
});

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
  trending: false,
  language: "pt-br"
};

// Realiza a autenticação para obter o token de acesso da API V5 (Twitch.tv)
const conectaTwitch = () => {
  fetch(URL_AUTH, PARAMS_AUTH)
    .then((res) => res.json())
    .then((res) => {
      const access_token = res.access_token;

      getTwitchDados(access_token, URL_CLIPS, PARAMS_CLIPS);
    })
    .catch((err) => {
      console.log("Erro ao autenticar!!!", err);
    });
};

const getTwitchDados = (token, url, params) => {
  const clipsData = [];

  url += "?" + new URLSearchParams(params).toString();

  fetch(url, {
    method: "GET",
    headers: HEADERS_CLIPS,
  })
    .then((res) => res.json())
    .then((topClips) => {
      clipsData.push(...topClips.clips);
      criaBancoDeDados(clipsData);
    })
    .catch((err) => {
      console.log("Erro ao obter clips", err);
    });
};

var btnTeste = document.getElementById("search-button");

if(btnTeste != null){
  btnTeste.onclick = (e) => searchClick();
}

var searchValue;

function searchFilter() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var parameter = url.searchParams.get("search");
  pesquisaClips(parameter);
}

function searchClick() {
  searchValue = document.getElementById("searchValue").value;

  if (searchValue != "") {
    window.location = "search.html?search=" + searchValue;
  } else alert("Por favor, selecione uma das opções para pesquisar!");
}

document.addEventListener("DOMContentLoaded", conectaTwitch);

$(document).ready(function () {  
  $("#modalClips").on("hide.bs.modal", function (e) {
    $("#video").attr("src", "");
  });  
});

export default { conectaTwitch, getTwitchDados };
export { searchFilter, searchClick, conectaTwitch, getTwitchDados };
