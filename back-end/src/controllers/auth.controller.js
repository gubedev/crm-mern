import tokenService from '../services/token.service';
/**
 *
 *
 * @class AuthController
 */
class AuthController {
    /**
     * signIn
     *
     * @static
     * @param {object} req express request object
     * @param {object} res express response object
     * @param {object} next next middleware
     * @returns {json} json object with status and gretting data
     * @memberof AuthController
     */
    static async signIn(req, res, next) {
        try {
            const token = await tokenService.createToken(1);
            return res.status(200).json({
                status: true,
                token
            });
        } catch (error) {
            return next(error);
        }
    }
}

export default AuthController;