import { Router } from 'express';
import WelcomeController from '../../controllers/welcome.controller';

const welcomeRoute = Router();

welcomeRoute.get('/', (req, res) => {
  const result = WelcomeController.greeting(req, res);
  return result;
});

export default welcomeRoute;
