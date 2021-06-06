// Funções Necessárias para Armazenamento em Banco de Dados Indexado no Browser

let db = "";

// Cria Banco de Dados no Browser do Usuário
const criaBancoDeDados = (TopClips) => {
  // Verifica se o Browser é compatível com IndexedDb
  if (window.indexedDB) {
    const bancoRequest = window.indexedDB.open("topClipsDB", 1);

    bancoRequest.onupgradeneeded = (e) => {
      console.log("Passou pelo Upgrade");

      // Obtém o banco de dados
      db = e.target.result;

      if (!db.objectStoreNames.contains("clips")) {
        // ObjectStorage = Tabela
        const clipsTb = db.createObjectStore("clips", {
          keyPath: "slug",
        });

        clipsTb.createIndex("title", "titleIdx", {
          unique: false,
          multiEntry: true,
        });
      }
    };

    bancoRequest.onsuccess = (e) => {
      console.log("Passou pelo Sucesso");

      db = e.target.result;

      adicionarClipsBD(db, TopClips);
      getAllClips();

      console.log("Sucesso ao criar o banco de dados");
    };

    bancoRequest.onerror = (e) => {
      console.log("Erro ao criar o Banco de Dados", e);
    };
  } else {
    console.log("Banco de dados IndexedDb não é suportado pelo Browser");
  }
};

// Adiciona os Clips no IndexedDb
const adicionarClipsBD = (db, clips) => {
  const transactionAdd = db.transaction("clips", "readwrite");
  const objectStorageClip = transactionAdd.objectStore("clips");

  console.log(`Quantidade de Registros em Clips ${clips.length}`);

  // Adiciona/Atualiza os vídeos obtidos da API do Twitch um por um no Banco de dados

  clips.forEach((clip) => {
    objectStorageClip.put(clip);
  });

  transactionAdd.oncomplete = (e) => {
    console.log("Transação concluída");
  };

  transactionAdd.onerror = (e) => {
    console.log("Erro ao realizar a inclusão de registro no banco de dados");
  };
};

// Obtém todos os clips da base de dados
function getAllClips() {
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
        displayClipsDaily(clipsList);
        displayClipsWeekly(clipsList);
      }
    };
  };

  requestDB.onerror = (e) => {
    console.log(
      `Erro na requisição para consultar os clips ${e.target.errorCode}`
    );
  };
}

// Função para listar os clips do dia na página inicial. TODO: Revisar o código, pois ainda não está funcional.
function displayClipsDaily(clips) {
  const quantidadeDeVideos = 8; // Quantidade de vídeos a serem dispostos na página
  var firstRowDaily = document.getElementById("firstRowDaily");
  var secondRowDaily = document.getElementById("secondRowDaily");

  for (let i = 0; i < quantidadeDeVideos; i++) {
    let url = clips[i];

    if (i <= 3) {
      firstRowDaily.innerHTML +=
        '<div class=" embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center mb-5"> <iframe id="teste" src="' +
        url.embed_url +
        '&parent=localhost"' +
        ' class="embed-responsive-item video" allowfullscreen></iframe></div>';
    } else {
      secondRowDaily.innerHTML +=
        '<div class=" embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center mb-5"> <iframe id="teste" src="' +
        url.embed_url +
        '&parent=localhost"' +
        ' class="embed-responsive-item video" allowfullscreen></iframe></div>';
    }
  }
}

// Função para listar os clips da semana na página inicial. TODO: Revisar o código, pois ainda não está funcional.
function displayClipsWeekly(clips) {
  const quantidadeDeVideos = 8; // Quantidade de vídeos a serem dispostos na página
  var firstRowDaily = document.getElementById("firstRowWeekly");
  var secondRowDaily = document.getElementById("secondRowWeekly");

  for (let i = 0; i < quantidadeDeVideos; i++) {
    let url = clips[i];

    if (i <= 3) {
      firstRowWeekly.innerHTML +=
        '<div class=" embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center mb-5"> <iframe id="teste" src="' +
        url.embed_url +
        '&parent=localhost"' +
        ' class="embed-responsive-item video" allowfullscreen></iframe></div>';
    } else {
      secondRowWeekly.innerHTML +=
        '<div class=" embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center mb-5"> <iframe id="teste" src="' +
        url.embed_url +
        '&parent=localhost"' +
        ' class="embed-responsive-item video" allowfullscreen></iframe></div>';
    }
  }
}

//Função para filtrar os vídeos
function searchClips() {
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
        filterClips(clipsList);
      }
    };
  };
  requestDB.onerror = (e) => {
    console.log(
      `Erro na requisição para consultar os clips ${e.target.errorCode}`
    );
  };
}

function filterClips(clips) {
  var element = document.getElementById("searchVideos");

  for (let i = 0; i < 9; i++) {
    let clip = clips[i];
    element.innerHTML +=
      '<div class="col"><iframe src="' +
      clip["embed_url"] +
      '&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no"></iframe></div><br/>';
  }
}

export default criaBancoDeDados;
export { searchClips };
