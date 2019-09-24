import jwt from 'jsonwebtoken';
import 'dotenv/config';
/**
 *
 *
 * @class TokenService
 */
class TokenService {
    /**
     * createToken
     *
     * @static
     * @param {object} userId user id
     * @returns {json} json object with status and token data
     * @memberof TokenService
     */
    static async createToken(userId) {
        const secretKey = process.env.SECRET_KEY;

        const token = jwt.sign({
            usuario: userId
        }, secretKey);

        try {
            return token;
        } catch (error) {
            return next(error);
        }
    }
}

export default TokenService;