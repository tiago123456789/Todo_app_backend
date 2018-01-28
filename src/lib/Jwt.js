import jwt from "jsonwebtoken";
import Constantes from "../config/Constantes";

export default class Jwt {

    /**
     * @description Gera token com base na informações.
     * @param conteudo
     * @returns {Promise.<*>}
     */
    static async build(conteudo) {
        return await jwt.sign(conteudo, process.env.SECRET || Constantes.TOKEN_SECRET, { expiresIn: Constantes.TIME_EXPIRED_TOKEN });
    }

    /**
     * @description Verifica se token é válido.
     * @param token
     * @returns {Promise.<*>}
     */
    static async isTokenValid(token) {
        try {
            const decoded = await jwt.verify(token, process.env.SECRET);
            return decoded;
        } catch (e) {
            throw new Error(e.message);
        } 
    }

    /**
     * @description Obtêm o payload do token.
     * @param token
     * @returns {*}
     */
    getPayload(token) {
        return jwt.decode(token);
    }
}