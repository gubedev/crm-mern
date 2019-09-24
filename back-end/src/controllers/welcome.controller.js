/**
 *
 *
 * @class WelcomeController
 */
class WelcomeController {
  /**
   * greeting
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status and gretting data
   * @memberof WelcomeController
   */
    static async greeting(req, res, next) {
        try {
            return res.status(200).json({
                status: true,
                message: 'Welcome to api rest crm !!',
            });
        } catch (error) {
            return next(error);
        }
    }
}

export default WelcomeController;