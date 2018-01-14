export default class REGEX {

    /**
     * @description Verifica se o email é válido.
     * @param email
     * @returns {boolean}
     */
    static isEmailValid(email) {
        const regexEmail = /^([a-z0-9])+@([a-z0-9])+\.([a-z]){3}$/
        return regexEmail.test(email);
    }
}