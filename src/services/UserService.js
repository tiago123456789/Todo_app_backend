import Senha from "./Senha";
import Jwt from "../lib/Jwt";
import UseDao from "../dao/UseDao";

export default class User {

    constructor(dao) {
        this._dao = new UseDao(dao);
        this._senhaServie = new Senha();
    }

    /**
     * @description Autenticação baseada em email é senha.
     * @param email
     * @param senha
     * @returns {Promise}
     */
    async autenticar(email, senha) {
        const userAutenticado = await this._dao.findBy({ email: email });

        if(!userAutenticado) {
            throw new Error("Dados inválidos!");
        }

        const isSenhaValid = await this._senhaServie.isSenhaValid(senha, userAutenticado.senha);

        if (!isSenhaValid) {
            throw new Error("Dados inválidos!");
        }

        const token = await Jwt.build({
            email: userAutenticado.email,
            nome: userAutenticado.nome,
            id: userAutenticado._id
        });

        return token;

    }

    /**
     * @description Registra um novo usuário.
     * @param newUser
     * @returns {Promise.<void>}
     */
    async register(newUser) {
        await this._verificarEmailEstaEmUso(newUser.email);
        newUser.senha = await this._senhaServie.encode(newUser.senha);
        await this._dao.create(newUser);
    }

    /**
     * @description Verifica se o email já está sendo usado.
     * @param email
     * @returns {Promise.<void>}
     * @private
     */
    async _verificarEmailEstaEmUso(email) {
        const emailEmUso = await this._dao.findBy({ email: email });
        if (emailEmUso) {
            throw new Error("Email está em uso.");
        }
    }

}