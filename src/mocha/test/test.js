import { pesquisaClips, dynamicClips, populaCarousel, displayTags, orderTags, displayClipsDaily, displayClipsWeekly, createTags, getAllClips, adicionarClipsBD, criaBancoDeDados } from "/src/clipitch/js/banco.js";
import { conectaTwitch, getTwitchDados, searchFilter, searchClick } from "/src/clipitch/js/script.js";

const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const spy = sinon.spy();

describe("Testes de unidade para o Clipitch", () => {
  describe("Descreve todas as funções do projeto", () => {    
    
    // Script.js funções
    it("Realiza conexão com a API do Twitch para autenticação e obtenção do Token", () => {
      spy.calledAfter(conectaTwitch);      
    });
      
    it("Obtém dados da API do Twitch após estar autenticado", () => {
      spy.calledAfter(getTwitchDados);      
    });    

    it("Método para filtro de pesquisa no banco de dados", () => {
      spy.calledAfter(searchFilter);      
    });    

    it("Método captura o input do search para filtro no banco de dados", () => {
      spy.calledAfter(searchClick);      
    });
    
    // Métodos banco.js
    it("Cria o banco de dados e exerce as funções atribuídas dentro da mesma chamada", () => {
      spy.calledAfter(criaBancoDeDados);
    });

    it("Pesquisa os clips recebidos da API do Twitch", () => {
      spy.calledAfter(pesquisaClips);      
    });

    it("Adiciona os clips no IndexedDB", () => {
      spy.calledAfter(adicionarClipsBD);     
    });

    it("Obtem todos os clips da base de dados", () => {
      spy.calledAfter(getAllClips);      
    });

    it("Lista os clips do dia na página inicial", () => {
      spy.calledAfter(displayClipsDaily);      
    });

    it("Lista os clips da semana na página inicial", () => {
      spy.calledAfter(displayClipsWeekly);      
    });

    it("Cria as tags", () => {
      spy.calledAfter(createTags);      
    });

    it("Ordena as tags de acordo com os títulos dos jogos", () => {
      spy.calledAfter(orderTags);      
    });
    
    it("Dispõe as tags na página inicial", () => {
      spy.calledAfter(displayTags);      
    });

    it("Popula o carrossel", () => {
      spy.calledAfter(populaCarousel);      
    });

    it("Seleciona os três primeiros clips para dispor no carrossel", () => {
      spy.calledAfter(dynamicClips);      
    });
  });
});

mocha.run();