export default class TaskController {

    constructor(service) {
        this._service = service;
    }

    /**
     * @description Busca todas as tarefas.
     * @param request
     * @param response
     * @returns {Promise.<void>}
     */
    async findAll(request, response) {
        try {
            const idUser = request.params.id;
            const tasks = await this._service.findAll(idUser);
            response.status(200).json(tasks);
        } catch (e) {
            response.sendStatus(500);
        }
    }

    /**
     * @description Cria um nova tarefa.
     * @param request
     * @param response
     * @returns {Promise.<void>}
     */
    async create(request, response) {
        try {
            const idUser = request.params.id;
            const newTask = request.body;
            await this._service.create(idUser, newTask);
            response.sendStatus(201);
        } catch (e) {
            response.status(400).json({ errors: e });
        }
    }

    /**
     * @description Deleta um tarefa com base idUser é idTask.
     * @param request
     * @param response
     * @returns {Promise.<void>}
     */
    async delete(request, response) {
        try {
            const idUser = request.params.id;
            const idTask = request.params.idTask;
            await this._service.delete(idUser, idTask);
            response.sendStatus(204);
        } catch(e) {
            response.status(e.codeException || 500).json({ errors: e.message });
        }
    }

    /**
     * @description Atualiza uma tarefa.
     * @param request
     * @param response
     * @returns {Promise.<void>}
     */
    async update(request, response) {
        try {
            const idUser = request.params.id;
            const idTask = request.params.idTask;
            const contentModified = request.body;
            await this._service.update(idUser, idTask, contentModified);
            response.sendStatus(204);
        } catch(e) {
            response.status(e.codeException || 500).json({ errors: e.message });
        }
    }
}