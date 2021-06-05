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
          displayClips(clipsList)
        }
        
      }
    };

    requestDB.onerror = (e) => {
      console.log(`Erro na requisição para consultar os clips ${e.target.errorCode}`);
    }

  
};

function displayClips(clips) {
  let listHTML = '<ul>';
  for (let i = 0; i < clips.length; i++) {
    let clip = clips[i];
    listHTML += '<li>' + clip["title"] + " - " + clip["url"] + '</li>';
  }
  document.getElementById('videos').innerHTML = listHTML;
}  

function listClipsDay(db) {
  var tabela = document.getElementById("videos");
  tabela.innerHTML = "";

  var s = "";

  var transaction = db.transaction("clips", "readonly");
  var clips = transaction.objectStore("clips");
  var cursor = clips.openCursor();

  cursor.onsuccess = function (e) {
    var cursor = e.target.result;
    if (cursor) {
      for (var field in cursor.value) {
        s += field + "=" + cursor.value.title + "<br/>";
      }
      s += "</p>";
      cursor.continue();
    }
  };

  transaction.oncomplete = () => {
    tabela.innerHTML = s;
  };
}

function listClipsDay(db) {
  var tabela = document.getElementById("videos");
  tabela.innerHTML = "";

  var s = "";

  var transaction = db.transaction("clips", "readonly");
  var clips = transaction.objectStore("clips");
  var cursor = clips.openCursor();

  cursor.onsuccess = function (e) {
    var cursor = e.target.result;
    if (cursor) {
      for (var field in cursor.value) {
        s += field + "=" + cursor.value.title + "<br/>";
      }
      s += "</p>";
      cursor.continue();
    }
  };

  transaction.oncomplete = () => {
    tabela.innerHTML = s;
  };
}

//Filtra no db
function searchClips(filterText) {
  const db = window.indexedDB.open("topClipsDB", 1);

  const transaction = db.transaction(['clips'], 'readonly');
  const objectStore = transaction.objectStore('clips');
  const getCursorRequest = objectStore.openCursor();

  var child = document.getElementById("idCard");
  child.innerHTML = ""; //Pega o corpo do element e seta = "nulo" caso possua algo de outras chamadas.

  getCursorRequest.onsuccess = e => {
    const cursor = e.target.result;
    if (cursor) {
      if(cursor.value.vendor === filterText){
        const clips = cursor.value;

        child.innerHTML += clips.game + '<br/>';
      }            
      cursor.continue();  
    } 
    else console.log('Anulou a thread, significa que chegou ao fim.');
  }

  let father = document.getElementById("idCard");
  appendElement(father, child)
}

export default criaBancoDeDados;
