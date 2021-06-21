import criaBancoDeDados from "/src/clipitch/js/banco.js";
import { message } from "../messages.js";

const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Testes de unidade para o ClipItch", () => {
  describe("#conectaTwitch()", () => {
    it("Cria o banco de dados e exerce as funções atribuídas dentro da mesma chamada", () => {
      //expect(criaBancoDeDados()).to.be.any;
      //const retorno = chai.spy.returns(criaBancoDeDados());
      //var spy = criaBancoDeDados.spy.returns(true);
      //on(criaBancoDeDados(), spy)
      //expect(criaBancoDeDados()).to.have.been.called();
      expect(criaBancoDeDados()).to.have.been.all;
      //spy.On(criaBancoDeDados());
    });
  });
  describe("#Teste()", function () {
    context("when not present", function () {
      it("should not throw an error", function () {
        (function () {
          [1, 2, 3].indexOf(4);
        }.should.not.throw());
      });
      it("should return -1", function () {
        [1, 2, 3].indexOf(4).should.equal(-1);
      });
    });
    context("when present", function () {
      it("should return the index where the element first appears in the array", function () {
        [1, 2, 3].indexOf(3).should.equal(2);
      });
    });
  });
  describe("Message Teste", () => {
    it("Espera que a string seja a mesma retornada da function", () => {
        assert.equal('hello', message)
    });
  });
  describe("Erro Teste", () => {
    it("Espera que a string seja a mesma retornada da function", () => {
        assert.equal('erro', message)
    });
  });
});

mocha.run();
