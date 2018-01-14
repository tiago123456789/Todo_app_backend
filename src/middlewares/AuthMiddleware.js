import Constantes from "../config/Constantes";
import Jwt from "../lib/Jwt";

/**
 * @description Verifica se possui token de autorização.
 * @param request
 * @param response
 * @param next
 * @returns {Promise.<void>}
 */
export default async (request, response, next) => {
    let token = request.get(Constantes.HEADER_PARAM_AUTH);
    if (!token) {
        return response.sendStatus(403);
    }

    try {
        token = token.replace("Bearer ", "");
        const isTokenValid = await Jwt.isTokenValid(token);

        if(!isTokenValid) {
            return response.sendStatus(401);
        }

        next();
    } catch (e) {
        return response.status(403).json({ errors: e.message });
    }
}