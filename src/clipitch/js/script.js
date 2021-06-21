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


document.getElementById("search-button").onclick = (e) => searchClick();
var searchValue;

function searchFilter() {
  var url_string = window.location.href
  var url = new URL(url_string);
  var parameter = url.searchParams.get("search");
  pesquisaClips(parameter);
}

function searchClick() {
  searchValue = document.getElementById("searchValue").value;

  if (searchValue != "") {
    window.location = 'search.html?search=' + searchValue;
  } else alert("Por favor, selecione uma das opções para pesquisar!");
}

document.addEventListener("DOMContentLoaded", conectaTwitch);

function carregaModal(clip){
  var body = document.getElementById("modal-body");

  //Reseta o contéudo do modal body a cada chamada
  body.innerHTML = '<div id="modal-body"></div>';

  //Verificar se é diferente de nulo e monta o modal-body
  if(clip != null){
    body.innerHTML += '<div class="col">'+ clip["embed_html"] +'</div>';
    body.innerHTML += '<div class="col"><div class="bg-views rounded p-3"> <img class="rounded-circle py-1 px-2 card-title" width="15%" src="\''+ clip.broadcaster["logo"]+ '\'" alt="Ícone do streamer">';
    body.innerHTML += '<b class="bFont text-white">\''+ clip.broadcaster["display_name"]+ '\'</b><br/><i class="text-white">\''+ clip["title"]+ '\'</i><br/>';
    body.innerHTML += '<b class="py-1 px-2 rounded gameFont">\''+ clip["game"]+ '\'</b><hr class="text-white"/><b class="py-1 px-2 rounded bg-custom">Clipado Por:</b>';
    body.innerHTML += '<img class="rounded-circle py-1 px-2 card-title" width="15%" src="\''+ clip.curator["logo"]+ '\'" alt="Ícone do cliper"><b class="bFont text-white">\''+ clip.curator["display_name"]+ '\'</b>';
    body.innerHTML += '<br/></div></div>';
  }

  //Chama o modal
  $('#modalClips').modal('show');
}

export default { conectaTwitch, getTwitchDados };
export { searchFilter };
