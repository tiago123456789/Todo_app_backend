import NotFoundException from "../exceptions/NotFoundException";
import TaskDao from "../daos/TaskDao";

export default class TaskService {

    constructor(dao) {
        this._dao = new TaskDao(dao);
    }

    /**
     * @description Busca todas as tarefas.
     * @returns {Promise.<*>}
     */
    async findAll(idUser) {
        return await this._dao.findAll();
    }

    /**
     * @description Cria um nova tarefa para um usuário especifico.
     * @param idUser
     * @param newTask
     * @returns {Promise.<*>}
     */
    async create(idUser, newTask) {
        return await this._dao.create(idUser, newTask);
    }

    /**
     * @description Deleta tarefa com base no idUser é idTask.
     * @param idUser
     * @param idTask
     * @returns {Promise.<*>}
     */
    async delete(idUser, idTask) {
        await this._verificaSeExiste(idUser, idTask);
        return await this._dao.delete(idUser, idTask);
    }

    /**
     * @description Atualiza um tarefa com base na idUser é idTask.
     * @param idUser
     * @param idTask
     * @param contentModified
     * @returns {Promise.<*>}
     */
    async update(idUser, idTask, contentModified) {
        await this._verificaSeExiste(idUser, idTask);
        return await this._dao.update(idUser, idTask, contentModified);
    }

    /**
     * @description Verifica se task existe.
     * @param idUser
     * @param idTask
     * @returns {Promise.<*>}
     * @private
     */
    async _verificaSeExiste(idUser, idTask) {
        const taskRetornada = await this._dao.findBy({ _id: idUser, "tasks._id": idTask });
        if (!taskRetornada) {
            throw new NotFoundException("Tasks não encontrada.");
        }
    }
}