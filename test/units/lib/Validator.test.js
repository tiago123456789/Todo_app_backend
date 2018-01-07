import Validor from "./../../../src/lib/Validator";

describe("Teste classe Validor", () => {

    it("Deve retorna true para email valido", (done) => {
        const emailDefault = "tiagorosadacost@gmail.com";
        expect(true).to.equal(Validor.isEmailValid(emailDefault));
        done();
    });

    it("Deve retornar false para email inválido", (done) => {
        const emailDefault = "tiagorosadacostT@gmail.com";
        expect(false).to.equal(Validor.isEmailValid(emailDefault));
        done();
    });
});