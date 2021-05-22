const URL_AUTH = "https://id.twitch.tv/oauth2/token";
const URL_CLIPS = "https://api.twitch.tv/kraken/clips/top";
const LIMIT = 100;
const CLIENT_ID = "client_id do twitch";
const CLIENT_SECRET = "coloque sua client_Secret";
const HEADERS_AUTH = {
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  grant_type: "client_credentials",
};

const HEADERS_CLIPS = {
  Accept: "application/vnd.twitchtv.v5+json",
  "Client-ID": CLIENT_ID,
};

const PARAMS = {
  "channel": null,
  "cursor": null,
  "game": null,
  "language": null,
  "limit": LIMIT,
  "period": "day",
  "trending": true,
};


const conectaTwitch = () => {
  fetch(URL_AUTH, {
    method: "POST",
    headers: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
        
    },
  })
    .then(res => res.json())
    .then(pegou_o_token => {
          let token = pegou_o_token.body.access_token;
          getTwitchDados(token, PARAMS)
        //console.log(token)
    })
    .catch((err) => {
      console.log("Erro ao autenticar!!!", err);
    });
};

const getTwitchDados = (auth_token, params) => {
  fetch(URL_CLIPS, {
    method: "GET",
    headers: HEADERS_CLIPS,
  })
    .then(res => res.json())
    .then(clips => {
      clips.map(clip => {
        console.log(clip);
      });
    })
    .catch((err) => {
      console.log("Erro ao obter clips", err);
    });
};

