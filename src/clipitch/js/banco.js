// Funções Necessárias para Armazenamento em Banco de Dados Indexado no Browser

let db = "";
const CONST_PARENT = "localhost";

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
        displayClips(clipsList);
      }
    };
  };

  requestDB.onerror = (e) => {
    console.log(
      `Erro na requisição para consultar os clips ${e.target.errorCode}`
    );
  };
}

// Função para listar os vídeos na página inicial. TODO: Revisar o código, pois ainda não está funcional.
function displayClips(clips) {
  let quantidadeDeVideos = 8; // Quantidade de vídeos a serem dispostos na página

  for (let i = 0; i < quantidadeDeVideos; i++) {
    let url = clips[i];
    document.getElementById(url[i]).innerHTML =
      'src="' + url.embed_url + '&parent=localhost"';
  }
}

//Função para filtrar os vídeos
function searchClips(filterText) {
    
  window.location.href = "search.html";  
  setTimeout(10000);

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
}

function filterClips(clips, filterText) {
  var element = document.getElementById("searchVideos");

  var count = 0;

  for (let i = 0; i < clips.length; i++) {
    let clip = clips[i];

    if (clip["game"] === filterText) {
      element.innerHTML +=
        '<div class="col-md-4 my-2"><iframe src="' + clip["embed_url"] + '&parent='+ CONST_PARENT +'" frameborder="0" allowfullscreen="true" width="100%" height="100%" scrolling="no"></iframe></div><br/>';
    }
    else count++;
  }
}

export default criaBancoDeDados;
export { searchClips };
