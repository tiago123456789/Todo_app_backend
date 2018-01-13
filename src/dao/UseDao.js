export default class UseDao {

    constructor(dao) {
        this._dao  = dao;
    }

    /**
     * @description Cria um novo usuário.
     * @param newUser
     * @returns {Promise.<void>}
     */
    async create(newUser) {
        await this._dao.create(newUser);
    }

    /**
     * @description Busca com base na condição.
     * @param condicaoBusca
     * @returns {Promise.<*>}
     */
    async findBy(condicaoBusca) {
        return await this._dao.findOne(condicaoBusca);
    }
}