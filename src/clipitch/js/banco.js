// Funções Necessárias para Armazenamento em Banco de Dados Indexado no Browser
let db = "";
const CONST_PARENT = "localhost";

// Cria Banco de Dados no Browser do Usuário
const criaBancoDeDados = (TopClips) => {
  // Verifica se o Browser é compatível com IndexedDb
  if (window.indexedDB) {
    const bancoRequest = window.indexedDB.open("topClipsDB", 1);

    bancoRequest.onupgradeneeded = (e) => {
      // Obtém o banco de dados
      db = e.target.result;

      if (!db.objectStoreNames.contains("clips")) {
        // ObjectStorage = Tabela
        const clipsTb = db.createObjectStore("clips", {
          keyPath: "slug",
        });

        clipsTb.createIndex("game", "game", {
          unique: false,
          multiEntry: true,
        });

        clipsTb.createIndex("created_at", "created_at", { unique: false });
      }
    };

    bancoRequest.onsuccess = (e) => {
      db = e.target.result;

      adicionarClipsBD(db, TopClips);
      getAllClips("day");
      getAllClips("week");
      populaCarousel();
    };

    bancoRequest.onerror = (e) => {
      console.log("Erro ao criar o Banco de Dados", e);
    };
  } else {
    console.log("Banco de dados IndexedDb não é suportado pelo Browser");
  }
};

// Pesquisa Clips pelo título
const pesquisaClips = (texto) => {
  const requestDB = window.indexedDB.open("topClipsDB", 1);

  requestDB.onsuccess = () => {
    const db = requestDB.result;
    const transaction = db.transaction(["clips"], "readonly");
    const clipObjectStore = transaction.objectStore("clips");
    const index = clipObjectStore.index("game");

    const request = index.getAll(IDBKeyRange.bound(texto, texto + "\uffff"));

    request.onsuccess = function (e) {
      var cursor = e.target.result;

      var element = document.getElementById("searchVideos");

      if (cursor) {
        cursor.forEach((clip) => {
          element.innerHTML +=
            '<div class="col-md-4 my-2 px-2"><div class="card"><img class="card-img-top testeImg" src="' +
            clip.thumbnails["medium"] +
            '" width="100%" alt="Clips""><div class="top-left-img text-white bg-cliped p-2 rounded"><b class="clipedFont">Clipado</b></div><div class="top-right-img text-white bg-views p-2 rounded">' +
            new Intl.NumberFormat("pt-BR", {
              maximumSignificantDigits: 10,
            }).format(clip["views"]) +
            "&nbsp;views" +
            '</div><div class="card-body"><img class="rounded-circle py-1 px-2 card-title" width="15%" src="' +
            clip.broadcaster["logo"] +
            '" alt="Ícone do streamer"><b class="bFont">' +
            clip.broadcaster["name"] +
            '</b>&nbsp;<p class="card-text">&nbsp;<i>' +
            clip["title"] +
            '</i><br/><b class="py-3">' +
            clip["game"] +
            "</b></p></div></div></div>";
        });
      }
    };
  };

  requestDB.onerror = (e) => {
    console.log(
      `Erro na requisição para consultar os clips ${e.target.errorCode}`
    );
  };
};

// Adiciona os Clips no IndexedDb
const adicionarClipsBD = (db, clips) => {
  const transactionAdd = db.transaction("clips", "readwrite");
  const objectStorageClip = transactionAdd.objectStore("clips");

  // Adiciona/Atualiza os vídeos obtidos da API do Twitch um por um no Banco de dados
  clips.forEach((clip) => {
    objectStorageClip.put(clip);
  });

  transactionAdd.oncomplete = (e) => {};

  transactionAdd.onerror = (e) => {
    console.log("Erro ao realizar a inclusão de registro no banco de dados");
  };
};

// Obtém todos os clips da base de dados
function getAllClips(dayOrWeek) {
  const requestDB = window.indexedDB.open("topClipsDB", 1);
  let clipsList = [];

  requestDB.onsuccess = () => {
    const db = requestDB.result;
    const transaction = db.transaction(["clips"], "readonly");
    const clipObjectStore = transaction.objectStore("clips");
    const index = clipObjectStore.index("created_at");

    var tipoDayOrWeek;
    const dataHoje = new Date();
    const dataInicial = new Date();

    if (dayOrWeek === "day") dataInicial.setDate(dataInicial.getDate() - 3);
    else if (dayOrWeek == "week") {
      dataInicial.setDate(dataInicial.getDate() - 7);
      dataHoje.setDate(dataHoje.getDate() - 1);
    }

    if (dayOrWeek === "day") {
      tipoDayOrWeek = IDBKeyRange.bound(
        dataInicial.toISOString(),
        dataHoje.toISOString()
      );
    } else if (dayOrWeek === "week") {
      tipoDayOrWeek = IDBKeyRange.bound(
        dataInicial.toISOString(),
        dataHoje.toISOString()
      );
    } else {
      let dateWeek = new Date(dateHoje - 7);
      tipoDayOrWeek = dateWeek;
    }

    const request = index.getAll(tipoDayOrWeek);

    request.onsuccess = (e) => {
      let resultado = e.target.result;

      if (resultado) {
        resultado.forEach((clip) => {
          clipsList.push(clip);
        });

        if (dayOrWeek === "day") {
          displayClipsDaily(clipsList);
        } else {
          displayClipsWeekly(clipsList);
        }
      }
    };

    requestDB.onerror = (e) => {
      console.log(
        `Erro na requisição para consultar os clips ${e.target.errorCode}`
      );
    };
  };
}

// Função para listar os clips do dia na página inicial. TODO: Revisar o código, pois ainda não está funcional.
function displayClipsDaily(clips) {
  const quantidadeDeVideos = clips.length; // Quantidade de vídeos a serem dispostos na página

  let gameTags = createTags(clips);
  let finalTags = orderTags(gameTags);
  displayTags(finalTags);

  var rowDaily =
    document.getElementById("rowDaily") != null
      ? document.getElementById("rowDaily")
      : null;

  var rowDailyPage =
    document.getElementById("rowDailyPage") != null
      ? document.getElementById("rowDailyPage")
      : null;

  for (let i = 0; i < quantidadeDeVideos; i++) {
    let url = clips[i];

    if (rowDaily != null) {
      if (i <= 8) {
        rowDaily.innerHTML +=
          '<div class="col-md-4 my-2 px-2"><div class="card"><img class="card-img-top testeImg" src="' +
          url.thumbnails["medium"] +
          '" width="100%" alt="Clips mais visualizados do dia""><div class="top-left-img text-white bg-cliped p-2 rounded"><b class="clipedFont">Clipado</b></div><div class="top-right-img text-white bg-views p-2 rounded">' +
          new Intl.NumberFormat("pt-BR", {
            maximumSignificantDigits: 10,
          }).format(url["views"]) +
          "&nbsp;views" +
          '</div><div class="card-body"><img class="rounded-circle py-1 px-2 card-title" width="15%" src="' +
          url.broadcaster["logo"] +
          '" alt="Ícone do streamer"><b class="bFont">' +
          url.broadcaster["name"] +
          '</b>&nbsp;<p class="card-text">&nbsp;<i>' +
          url["title"] +
          '</i><br/><b class="py-3">' +
          url["game"] +
          "</b></p></div></div></div>";
      }
    } else if (rowDailyPage != null) {
      rowDailyPage.innerHTML +=
        '<div class="col-md-4 my-2 px-2"><div class="card"><img class="card-img-top testeImg" src="' +
        url.thumbnails["medium"] +
        '" width="100%" alt="Clips mais visualizados do dia""><div class="top-left-img text-white bg-cliped p-2 rounded"><b class="clipedFont">Clipado</b></div><div class="top-right-img text-white bg-views p-2 rounded">' +
        new Intl.NumberFormat("pt-BR", { maximumSignificantDigits: 10 }).format(
          url["views"]
        ) +
        "&nbsp;views" +
        '</div><div class="card-body"><img class="rounded-circle py-1 px-2 card-title" width="15%" src="' +
        url.broadcaster["logo"] +
        '" alt="Ícone do streamer"><b class="bFont">' +
        url.broadcaster["name"] +
        '</b>&nbsp;<p class="card-text">&nbsp;<i>' +
        url["title"] +
        '</i><br/><b class="py-3">' +
        url["game"] +
        "</b></p></div></div></div>";
    }
  }
}

// Função para listar os clips da semana na página inicial. TODO: Revisar o código, pois ainda não está funcional.
function displayClipsWeekly(clips) {
  const quantidadeDeVideos = clips.length; // Quantidade de vídeos a serem dispostos na página

  var rowWeekly =
    document.getElementById("rowWeekly") != null
      ? document.getElementById("rowWeekly")
      : null;
  var rowWeeklyPage =
    document.getElementById("rowWeeklyPage") != null
      ? document.getElementById("rowWeeklyPage")
      : null;

  for (let i = 0; i < quantidadeDeVideos; i++) {
    let url = clips[i];

    if (rowWeekly != null) {
      if (i <= 8) {
        rowWeekly.innerHTML +=
          '<div class="col-md-4 my-2 px-2"><div class="card"><img class="card-img-top testeImg" src="' +
          url.thumbnails["medium"] +
          '" width="100%" alt="Clips mais visualizados da semana""><div class="top-left-img text-white bg-cliped p-2 rounded"><b class="clipedFont">Clipado</b></div><div class="top-right-img text-white bg-views p-2 rounded">' +
          new Intl.NumberFormat("pt-BR", {
            maximumSignificantDigits: 10,
          }).format(url["views"]) +
          "&nbsp;views" +
          '</div><div class="card-body"><img class="rounded-circle py-1 px-2 card-title" width="15%" src="' +
          url.broadcaster["logo"] +
          '" alt="Ícone do streamer"><b class="bFont">' +
          url.broadcaster["name"] +
          '</b>&nbsp;<p class="card-text">&nbsp;<i>' +
          url["title"] +
          '</i><br/><b class="py-3">' +
          url["game"] +
          "</b></p></div></div></div>";
      }
    } else if (rowWeeklyPage != null) {
      rowWeeklyPage.innerHTML +=
        '<div class="col-md-4 my-2 px-2"><div class="card"><img class="card-img-top testeImg" src="' +
        url.thumbnails["medium"] +
        '" width="100%" alt="Clips mais visualizados da semana""><div class="top-left-img text-white bg-cliped p-2 rounded"><b class="clipedFont">Clipado</b></div><div class="top-right-img text-white bg-views p-2 rounded">' +
        new Intl.NumberFormat("pt-BR", { maximumSignificantDigits: 10 }).format(
          url["views"]
        ) +
        "&nbsp;views" +
        '</div><div class="card-body"><img class="rounded-circle py-1 px-2 card-title" width="15%" src="' +
        url.broadcaster["logo"] +
        '" alt="Ícone do streamer"><b class="bFont">' +
        url.broadcaster["name"] +
        '</b>&nbsp;<p class="card-text">&nbsp;<i>' +
        url["title"] +
        '</i><br/><b class="py-3">' +
        url["game"] +
        "</b></p></div></div></div>";
    }
  }
}

// Função para criar as tags
function createTags(clips) {
  let gameTags = [];

  clips.forEach((clips) => {
    gameTags.push(clips["game"]);
  });
  return gameTags;
}

// Função para selecionar as tags de acordo com os jogos
function orderTags(array) {
  var frequency = {},
    value;

  // compute frequencies of each value
  for (var i = 0; i < array.length; i++) {
    value = array[i];
    if (value in frequency) {
      frequency[value]++;
    } else {
      frequency[value] = 1;
    }
  }

  // make array from the frequency object to de-duplicate
  var uniques = [];
  for (value in frequency) {
    uniques.push(value);
  }

  // sort the uniques array in descending order by frequency
  function compareFrequency(a, b) {
    return frequency[b] - frequency[a];
  }
  return uniques.sort(compareFrequency);
}

// Função para dispor as tags nas páginas
function displayTags(array) {
  let element =
    document.getElementById("tagsDiv") != null
      ? document.getElementById("tagsDiv")
      : null;

  if (element != null) {
    for (let i = 0; i < 7; i++) {
      let clips = array[i];
      element.innerHTML +=
        '<li class="list-group-item list-group-item-action p-4"><a class="btn text-dark textCenter shadow-none border-0" aria-current="true" role="button"  href="/src/clipitch/search.html?search=' +
        clips +
        '"><b>#' +
        clips +
        "</b></a></li>";
    }
  }
}

// Obtém o curso para ler a tabela de Clips - Retorna o Cursor Aberto posicionado na Tabela
function getCursorBancoDeDados(db) {
  const transaction = db.transaction(["clips"], "readonly");
  const tabelaClip = transaction.objectStore("clips");
  const cursorAberto = tabelaClip.openCursor();
  return cursorAberto;
}

const populaCarousel = () => {
  const requestDB = window.indexedDB.open("topClipsDB", 1);
  let clipsList = [];

  requestDB.onsuccess = () => {
    const requestDB = window.indexedDB.open("topClipsDB", 1);

    requestDB.onsuccess = () => {
      const db = requestDB.result;
      const transaction = db.transaction(["clips"], "readonly");
      const clipObjectStore = transaction.objectStore("clips");
      const index = clipObjectStore.index("game");

      const request = index.getAll();

      request.onsuccess = function (e) {
        var cursor = e.target.result;

        if (cursor) {
          let count = 0;

          let element =
            document.getElementById("carouselInner") != null
              ? document.getElementById("carouselInner")
              : null;

          if (element != null) {
            cursor.forEach((clip) => {
              if (count === 0) {
                element.innerHTML +=
                  '<div class="carousel-item active embed-responsive-item"><iframe class="d-block"  id="carouselIFrame" alt="Clips em destaque" src="' +
                  clip["embed_url"] +
                  "&parent=" +
                  CONST_PARENT +
                  '"frameborder="0" allowfullscreen="true" scrolling="no""></iframe></div>';

                count++;
              } else if (count > 0 && count < 3) {
                element.innerHTML +=
                  '<div class="carousel-item embed-responsive-item"><iframe class="d-block" id="carouselIFrame" alt="Clips em destaque" src="' +
                  clip["embed_url"] +
                  "&parent=" +
                  CONST_PARENT +
                  '"frameborder="0" allowfullscreen="true" scrolling="no""></iframe></div>';

                count++;
              }
            });
          }
        }
      };
    };
  };

  requestDB.onerror = (e) => {
    console.log(
      `Erro na requisição para consultar os clips ${e.target.errorCode}`
    );
  };
};

export default criaBancoDeDados;
export { pesquisaClips };
