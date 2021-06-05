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
          autoIncrement: true,
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
  const divClips = document.getElementById("videos");

  const bancoDeDados = window.indexedDB.open("topClipsDB", 1);

  let clipsList = [];

  bancoDeDados.onsuccess = () => {

    const db = bancoDeDados.result;    
    const cursorAberto = getCursorBancoDeDados(db);
    
    cursorAberto.onsuccess = (evento) => {
      let cursor = evento.target.result;

      // Verificar se o cursor possui dados ou se está no final dele
      if (cursor) {
        clipsList.push(cursor.value);
        cursor.continue();
      } else {
        displayClips(clipsList);
      }
    };
  };

  bancoDeDados.onerror = (e) => {
    console.log(
      `Erro na requisição para consultar os clips ${e.target.errorCode}`
    );
  };
}


function displayClips(clips) {
  let listHTML = "<ul>";

  clips.forEach((clip) => {
    listHTML += `<li key=${clip["slug"]}><a href=${clip["url"]}> ${clip["title"]}</a></li>`;
  })
  document.getElementById("videos").innerHTML = listHTML;
}



function searchClips(searchText) {
  const divClips = document.getElementById("videos");

  const bancoDeDados = window.indexedDB.open("topClipsDB", 1);

  let clipsList = [];

  bancoDeDados.onsuccess = () => {

    const db = bancoDeDados.result;    
    const cursorAberto = getCursorBancoDeDados(db);
    
    cursorAberto.onsuccess = (evento) => {
      let cursor = evento.target.result;

      // Verificar se o cursor possui dados ou se está no final dele
      if (cursor) {
        clipsList.push(cursor.value);
        cursor.continue();
      } else {
        displayClips(clipsList);
      }
    };
  };

  bancoDeDados.onerror = (e) => {
    console.log(
      `Erro na requisição para consultar os clips ${e.target.errorCode}`
    );
  };
}

function listClipsDay() {
  const divClips = document.getElementById("videos");

  const bancoDeDados = window.indexedDB.open("topClipsDB", 1);

  let clipsList = [];

  bancoDeDados.onsuccess = () => {

    const db = bancoDeDados.result;    
    const cursorAberto = getCursorBancoDeDados(db);
    
    cursorAberto.onsuccess = (evento) => {
      let cursor = evento.target.result;

      // Verificar se o cursor possui dados ou se está no final dele
      if (cursor) {
        clipsList.push(cursor.value);
        cursor.continue();
      } else {
        displayClips(clipsList);
      }
    };
  };

  bancoDeDados.onerror = (e) => {
    console.log(
      `Erro na requisição para consultar os clips ${e.target.errorCode}`
    );
  };
}

function listClipsWeek() {
  const divClips = document.getElementById("videos");

  const bancoDeDados = window.indexedDB.open("topClipsDB", 1);

  let clipsList = [];

  bancoDeDados.onsuccess = () => {

    const db = bancoDeDados.result;    
    const cursorAberto = getCursorBancoDeDados(db);
    
    cursorAberto.onsuccess = (evento) => {
      let cursor = evento.target.result;

      // Verificar se o cursor possui dados ou se está no final dele
      if (cursor) {
        clipsList.push(cursor.value);
        cursor.continue();
      } else {
        displayClips(clipsList);
      }
    };
  };

  bancoDeDados.onerror = (e) => {
    console.log(
      `Erro na requisição para consultar os clips ${e.target.errorCode}`
    );
  };
}


function tagClips(db) {

  // Falta impplementar os clips por TAGS para que o usuário possa filtrar

}

// Obtém o curso para ler a tabela de Clips - Retorna o Cursor Aberto posicionado na Tabela
function getCursorBancoDeDados(db) {
  const transaction = db.transaction(["clips"], "readonly");
  const tabelaClip = transaction.objectStore("clips");
  const cursorAberto = tabelaClip.openCursor();
  return cursorAberto;
}

export default criaBancoDeDados;
