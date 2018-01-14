export default class User {

    constructor(service) {
        this._service = service;
    }

    /**
     * @description Autentica usuario com base no email é senha.
     * @param request
     * @param response
     */
    async auth(request, response) {
        try {
            const { email, senha } = request.body;
            const userAutenticado = await this._service.autenticar(email, senha);
            response.status(200).json({ token: userAutenticado });
        } catch(e) {
            response.status(401).json({ errors: e.message});
        }
    }

    /**
     * @description Cria um novo usuário.
     * @param request
     * @param response
     */
    async register(request, response) {
        try {
            const newUser = {
                nome: request.body.nome,
                email: request.body.email,
                senha: request.body.senha
            };
            await this._service.register(newUser);
            response.sendStatus(201);
        } catch(e) {
            response.status(400).json({ errors: e.message });
        }
    }
}