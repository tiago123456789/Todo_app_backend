import bcrypt from "bcrypt";

export default class Senha {

    /**
     * @description Obtêm o salt para colocar na senha.
     * @returns {Promise}
     * @private
     */
    _getSalt() {
        return new Promise((resolve, reject) => {
            const saltRounds = 10;
            bcrypt.genSalt(saltRounds, function(err, salt) {
                if(err) reject(err);
                else resolve(salt);
            });
        })
    }

    /**
     * @description Gera um hash do valor informado.
     * @param valor
     * @returns {Promise}
     */
    encode(valor) {
        return new Promise(async (resolve, reject) => {
           const salt = await this._getSalt();
           bcrypt.hash(valor, salt, (err, hash) => {
              if(err) reject(err);
              else resolve(hash);
           });
        });
    }

    /**
     * @description Verifica se a senha informada é válida.
     * @param senha
     * @param hashSenha
     * @returns {Promise.<*>}
     */
    isSenhaValid(senha, hashSenha) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(senha, hashSenha, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

}