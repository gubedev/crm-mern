import { Router } from 'express';
import AuthController from '../../controllers/auth.controller';

const authRoute = Router();

authRoute.post('/signIn', (req, res) => {
  const result = AuthController.signIn(req, res);
  return result;
});

export default authRoute;
