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
    const transaction = db.transaction(['clips'], 'readonly')
    const clipObjectStore = transaction.objectStore("clips");
    const index = clipObjectStore.index("game");

    const request = index.getAll(IDBKeyRange.bound(texto, texto + '\uffff'));

    console.log(request)
    request.onsuccess = function (e) {
    var cursor = e.target.result;

    var element = document.getElementById("searchVideos");  
    
    if (cursor){
      cursor.forEach((clip => {
        element.innerHTML +=
        '<div class="col-md-4 my-2"><iframe src="' +
        clip["embed_url"] +
        "&parent=" +
        CONST_PARENT +
        '" frameborder="0" allowfullscreen="true" width="100%" height="100%" scrolling="no"></iframe></div><br/>';
      }))
    }
  };

  }

  requestDB.onerror = (e) => {
    console.log(
      `Erro na requisição para consultar os clips ${e.target.errorCode}`
    );
  };

  
}

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
  const quantidadeDeVideos = 16; // Quantidade de vídeos a serem dispostos na página
  var firstRowDaily =
    document.getElementById("firstRowDaily") != null
      ? document.getElementById("firstRowDaily")
      : null;
  var secondRowDaily =
    document.getElementById("secondRowDaily") != null
      ? document.getElementById("secondRowDaily")
      : null;
  var thirdRowDaily =
    document.getElementById("thirdRowDaily") != null
      ? document.getElementById("thirdRowDaily")
      : null;
  var fourthRowDaily =
    document.getElementById("fourthRowDaily") != null
      ? document.getElementById("fourthRowDaily")
      : null;

  for (let i = 0; i < quantidadeDeVideos; i++) {
    let url = clips[i];

    if (i <= 3) {
      if (firstRowDaily != null) {
        firstRowDaily.innerHTML +=
          '<div class=" embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center mb-5"> <iframe id="teste" src="' +
          url["embed_url"] +
          '&parent=localhost"' +
          ' class="embed-responsive-item video" allowfullscreen></iframe></div>';
      }
    } else if (i > 3 && i <= 7) {
      if (secondRowDaily != null) {
        secondRowDaily.innerHTML +=
          '<div class=" embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center mb-5"> <iframe id="teste" src="' +
          url["embed_url"] +
          '&parent=localhost"' +
          ' class="embed-responsive-item video" allowfullscreen></iframe></div>';
      }
    } else if (i > 7 && i <= 11) {
      if (thirdRowDaily != null) {
        thirdRowDaily.innerHTML +=
          '<div class=" embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center mb-5"> <iframe id="teste" src="' +
          url["embed_url"] +
          '&parent=localhost"' +
          ' class="embed-responsive-item video" allowfullscreen></iframe></div>';
      }
    } else {
      if (fourthRowDaily != null) {
        fourthRowDaily.innerHTML +=
          '<div class=" embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center mb-5"> <iframe id="teste" src="' +
          url["embed_url"] +
          '&parent=localhost"' +
          ' class="embed-responsive-item video" allowfullscreen></iframe></div>';
      }
    }
  }
}

// Função para listar os clips da semana na página inicial. TODO: Revisar o código, pois ainda não está funcional.
function displayClipsWeekly(clips) {
  const quantidadeDeVideos = 16; // Quantidade de vídeos a serem dispostos na página
  var firstRowWeekly =
    document.getElementById("firstRowWeekly") != null
      ? document.getElementById("firstRowWeekly")
      : null;
  var secondRowWeekly =
    document.getElementById("secondRowWeekly") != null
      ? document.getElementById("secondRowWeekly")
      : null;
  var thirdRowWeekly =
    document.getElementById("thirdRowWeekly") != null
      ? document.getElementById("thirdRowWeekly")
      : null;
  var fourthRowWeekly =
    document.getElementById("fourthRowWeekly") != null
      ? document.getElementById("fourthRowWeekly")
      : null;

  for (let i = 0; i < quantidadeDeVideos; i++) {
    let url = clips[i];

    if (i <= 3) {
      if (firstRowWeekly != null) {
        firstRowWeekly.innerHTML +=
          '<div class=" embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center mb-5"> <iframe id="teste" src="' +
          url["embed_url"] +
          '&parent=localhost"' +
          ' class="embed-responsive-item video" allowfullscreen></iframe></div>';
      }
    } else if (i > 3 && i <= 7) {
      if (secondRowWeekly != null) {
        secondRowWeekly.innerHTML +=
          '<div class=" embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center mb-5"> <iframe id="teste" src="' +
          url["embed_url"] +
          '&parent=localhost"' +
          ' class="embed-responsive-item video" allowfullscreen></iframe></div>';
      }
    } else if (i > 7 && i <= 11) {
      if (thirdRowWeekly != null) {
        thirdRowWeekly.innerHTML +=
          '<div class=" embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center mb-5"> <iframe id="teste" src="' +
          url["embed_url"] +
          '&parent=localhost"' +
          ' class="embed-responsive-item video" allowfullscreen></iframe></div>';
      }
    } else {
      if (fourthRowWeekly != null) {
        fourthRowWeekly.innerHTML +=
          '<div class=" embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center mb-5"> <iframe id="teste" src="' +
          url["embed_url"] +
          '&parent=localhost"' +
          ' class="embed-responsive-item video" allowfullscreen></iframe></div>';
      }
    }
  }
}

//Função para filtrar os vídeos
const searchClips = (filterText) => {
  const requestDB = window.indexedDB.open("topClipsDB", 1);
  let clipsList = [];

  requestDB.onsuccess = () => {
    const db = requestDB.result;
    const transaction = db.transaction(["clips"], "readwrite");
    const clipObjectStore = transaction.objectStore("clips");
    const cursorRequest = clipObjectStore.openCursor();
    cursorRequest.onsuccess = (e) => {
      let cursor = e.target.result;

      if (cursor) {
        clipsList.push(cursor.value);
        cursor.continue();
      } else {
        filterClips(clipsList, filterText);
      }
    };
  };
  requestDB.onerror = (e) => {
    console.log(
      `Erro na requisição para consultar os clips ${e.target.errorCode}`
    );
  };
};

function filterClips(clips, filterText) {
  
  let countFilter;

  if (filterText === "Just Chatting") countFilter = 25;
  else countFilter = clips.length;

  for (let i = 0; i < countFilter; i++) {
    let clip = clips[i];

    if (clip["game"] === filterText) {
     
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

export default criaBancoDeDados;
export { pesquisaClips };
