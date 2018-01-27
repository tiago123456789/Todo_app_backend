import UserController from "../controllers/UserController";
import UserService from "./../services/UserService";
import userDao from "./../collections/User";
import TaskController from "../controllers/TaskController";
import TaskService from "../services/TaskService";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import Senha from "../services/Senha";
import bcrypt from "bcrypt";

export default (express) => {
    const router = express.Router();
    const userService = new UserService(userDao, new Senha(bcrypt));
    const userController = new UserController(userService);
    const taskService = new TaskService(userDao);
    const taskController = new TaskController(taskService);

    /**
     * @description Retorna todas as tarefas.
     */
    router.get("/:id/tasks", AuthMiddleware, (request, response) => taskController.findAll(request, response));

    /**
     * @description Cria uma nova tarefa.
     */
    router.post("/:id/tasks", AuthMiddleware, (request, response) => taskController.create(request, response));

    /**
     * @description Deleta um tarefa.
     */
    router.delete("/:id/tasks/:idTask", AuthMiddleware, (request, response) => taskController.delete(request, response));

    /**
     * @description Atualiza uma tarefa.
     */
    router.put("/:id/tasks/:idTask", AuthMiddleware, (request, response) => taskController.update(request, response));

    /**
     * @description Rota para registrar um novo usuário.
     */
    router.post("/register", (request, response) => userController.register(request, response));

    /**
     * @description Rota de autenticação.
     */
    router.post("/auth", (request, response) => userController.auth(request, response));

    return router;
}