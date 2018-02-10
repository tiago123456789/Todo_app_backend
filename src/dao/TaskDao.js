export default class TaskDao {

    constructor(dao) {
        this._dao = dao;
    }

    /**
     * @description Busca todos as tarefas.
     * @param idUser
     * @returns {Promise.<*>}
     */
    async findAll(idUser) {
        return await this._dao.find({ _id: idUser }, { tasks: 1, _id: 0 });
    }

    /**
     * @description Deleta um tarefa com base na idUser é idTask.
     * @param idUser
     * @param idTask
     * @returns {Promise.<*>}
     */
    async delete(idUser, idTask) {
        return await this._dao.update({ _id: idUser }, { $pull: { tasks: { _id: idTask }}});
    }

    /**
     * @description Atualizar um tarefa com base na idUser é idTask.
     * @param idUser
     * @param idTask
     * @param contentModified
     * @returns {Promise.<*>}
     */
    async update(idUser, idTask, contentModified) {
        return await this._dao.update({ _id: idUser, "tasks._id": idTask }, { $set: { tasks: contentModified }});
    }

    /**
     * @description Cria um nova tarefa.
     * @param idUser
     * @param newTask
     * @returns {Promise.<*>}
     */
    async create(idUser, newTask) {
        return await this._dao.update({ _id: idUser }, { $addToSet: { "tasks": newTask }});
    }

    /**
     * @description Buscar tarefa com base na condicaoBusca.
     * @param condicaoBusca
     * @returns {Promise.<*>}
     */
    async findBy(condicaoBusca) {
        return await this._dao.findOne(condicaoBusca);
    }
}