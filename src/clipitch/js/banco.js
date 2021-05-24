// Funções Necessárias para Armazenamento em Banco de Dados Indexado no Browser

let db = "";

const criaBancoDeDados = (TopClips) => {
  // Verifica se o Browser é compatível com IndexedDb
  if (window.indexedDB) {
    const request = window.indexedDB.open("topClipsDB", 1);

    request.onupgradeneeded = (e) => {
      // Obtém o banco de dados
      db = e.target.result;

      // ObjectStorage = Tabela
      const objectStorageClips = db.createObjectStore("clips", {
        keyPath: "broadcast_id"
      });

      objectStorageClips.createIndex("title", "titleIdx", { unique: false });
    };

    request.onsuccess = (e) => {
      db = e.target.result;

      for (let i in TopClips) {
        console.log(TopClips[i]);
        addClip(db, TopClips[i]);
      }

      console.log("Sucesso ao criar o banco de dados");
    };

    request.onerror = (e) => {
      console.log("Erro ao criar o Banco de Dados", e);
    };
  } else {
    console.log("Banco de dados IndexedDb não é suportado pelo Browser");
  }
};

// Adiciona os Clips no IndexedDb
const addClip = (db, clip) => {
  const transactionAdd = db.transaction("clips", "readwrite");
  const objectStorageClip = transactionAdd.objectStore("clips");

  const request = objectStorageClip.put(clip);

  transactionAdd.oncomplete = (e) => {
    console.log("Transação completada");
  };

  transactionAdd.onerror = (e) => {
    console.log("Erro ao realizar a inclusão de registro no banco de dados");
  };
};

export default criaBancoDeDados;