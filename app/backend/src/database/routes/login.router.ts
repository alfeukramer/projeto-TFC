import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateLoginFields from '../middlerawes/validateLogin';
import authentication from '../middlerawes/validateToken';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/login', validateLoginFields, (req, res) => loginController.newLogin(req, res));

loginRouter.get('/login/validate', authentication, (req, res) =>
  loginController.validateAuth(req, res));

export default loginRouter;
