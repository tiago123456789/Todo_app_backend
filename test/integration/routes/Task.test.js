import JWT from "./../../../src/lib/Jwt";
import Constantes from "../../../src/config/Constantes";

describe("Test integration Task", () => {
    let token = "";
    const userFake = {
        name: "Testando register user",
        email: "registeruse@gmail.com",
    };
    const taskFake = {
        description: "Task fake."
    };

    beforeEach(async () => token = await JWT.build(userFake));

    it("Should returned list de task user", async () => {
        request(app)
            .get("/users/1/tasks")
            .set(Constantes.HEADER_PARAM_AUTH, token)
            .expect(200)
            .end((err, resultado) => {
                if (err) done(err);
                else assert(resultado.length() > 0);
            });
    });

    it("Should returned status code 201 to the create new task", () => {
        request(app)
            .post("/users/1/tasks")
            .send(taskFake)
            .set(Constantes.HEADER_PARAM_AUTH, token)
            .expect(201);
    });

    it("Should returned status code 204 when operation delete success.", () => {
        request(app)
            .delete("/users/1/tasks/1")
            .set(Constantes.HEADER_PARAM_AUTH, token)
            .expect(204);
    });

    it("Should returned status code 204 when operation update success.", () => {
        request(app)
            .put("/users/1/tasks/1")
            .send(taskFake)
            .expect(204)
    });
});