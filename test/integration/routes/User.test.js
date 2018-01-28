import userDao from "./../../../src/collections/User";

describe("Test integration User", () => {
    const userFake = {
        name: "Testando register user",
        email: "registeruse@gmail.com",
        senha: "registeruser"
    };

    /**
     * @description Remove userFake caso exista no banco de dados.
     */
    beforeEach(() => {
        userDao.remove(userFake);
    });

    it("Should status code 403", function() {
        request(app)
            .get("users/1/tasks")
            .expect(403)
    });

    it("Should status code 401", function() {
        request(app)
            .get("users/1/tasks")
            .set("Authorization", "tokenfailed")
            .expect(401);
    });

    it("Should returned 201 to the register user", function() {
        request(app)
            .post("/users")
            .send(userFake)
            .expect(201)
    });
});