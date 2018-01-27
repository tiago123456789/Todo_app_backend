import TaskService from "../../../src/services/TaskService";

describe("TaskService testing", () => {
    const id = 1;
    const defaultTask = {
        id: 1,
        description: "Testando",
    };
    const daoFake = {};

    it("Should called method create of task", function() {
        daoFake.create = sinon.spy();
        const taskService = new TaskService(daoFake);
        taskService
            .create(id, defaultTask)
            .then(() => assert(daoFake.create.calledOne(defaultTask)));
    });

    it("Should return lists de tasks when called method findAll", function() {
        const listaTarefas = [
            { description: "fdsfsdafasdfsdfaas" },
            { description: "Other tasks" }
        ];

        daoFake.findAll = sinon.stub();
        daoFake.findAll.withArgs(id).returns(listaTarefas);
        const taskService = new TaskService(daoFake);
        taskService
            .findAll(id)
            .then(resultado => {
                assert(listaTarefas.length === resultado.length, "Not retuned quantity expected")
            })
    });

    it("Should called method delete once", function() {
       daoFake.delete = sinon.spy();
       const taskService = new TaskService(daoFake);
       taskService
           .delete(id, defaultTask.id)
           .then(() => assert(daoFake.delete.calledOne(id, defaultTask.id)));
    });

    it("Should launch throw to the try deleted tasks not exist", function() {
       daoFake.findOne = sinon.stub();
       daoFake.findOne.withArgs(id, defaultTask.id).returns(null);
       const taskService = new TaskService(daoFake);
       taskService
           .delete(id, defaultTask.id)
           .catch(error => expect(error).to.throw())
    });

    it("Should called method update once", function() {
        daoFake.update = sinon.spy();
        const taskService = new TaskService(daoFake);
        taskService
            .update(id, defaultTask.id, defaultTask)
            .then(() => assert(daoFake.delete.calledOne(id, defaultTask.id, defaultTask)));
    });

    it("Should launch throw to the try updated tasks not exist", function() {
        daoFake.findOne = sinon.stub();
        daoFake.findOne.withArgs(id, defaultTask.id).returns(null);
        const taskService = new TaskService(daoFake);
        taskService
            .update(id, defaultTask.id, defaultTask)
            .catch(error => expect(error).to.throw())
    });
});