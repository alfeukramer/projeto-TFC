import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateLoginFields from '../middlerawes/validateLogin';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/login', validateLoginFields, (req, res) => loginController.newLogin(req, res));

export default loginRouter;
