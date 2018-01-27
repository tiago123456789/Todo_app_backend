import Senha from "../../../src/services/Senha";
import UserService from "../../../src/services/UserService";

describe("UserService testing", () => {
    const bcryptFake = {};
    const defaultUser = {
        nome: "Tiago R. da costa",
        email: "tiago@gmail.com",
        senha: "1234"
    };

    const daoFake = {};

    it("Should returned token user authenticated", function() {
        daoFake.findOne = sinon.stub();
        bcryptFake.compare = sinon.stub();
        bcryptFake.compare.withArgs(defaultUser.senha, defaultUser.senha).returns(true);
        daoFake.findOne.withArgs({ email: defaultUser.email }).returns(defaultUser);
        const senhaService = new Senha(bcryptFake);
        const userService = new UserService(daoFake, senhaService);

        userService
            .autenticar(defaultUser.email, defaultUser.senha)
            .then(token => expect(token).to.be.an("string"));
    });

    it("Should launch throws to email existing", function() {
        daoFake.findOne.withArgs({ email: defaultUser.email }).returns(defaultUser);
        const userService = new UserService(daoFake, new Senha(bcryptFake));
        userService
            .register(defaultUser)
            .catch(error => expect(error).to.throw());
    });

    it("Should create new user", function() {
        daoFake.create = sinon.spy();
        daoFake.findOne.withArgs({ email: defaultUser.email }).returns(null);
        const userService = new UserService(daoFake, new Senha(bcryptFake));
        userService
            .register(defaultUser)
            .then(() => assert(daoFake.create.calledOn(defaultUser)));
    });
});