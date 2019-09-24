import { Router } from 'express';
import welcomeRoute from './welcome.route';
import authRoute from './auth.route';

const routes = Router();

routes.use('/', welcomeRoute);
routes.use('/auth', authRoute);

export default routes;
