import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import ErrorGeneric from '../errors/missingFields';

export default class LoginController {
  private readonly loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  async newLogin(req: Request, res: Response) {
    const token = await this.loginService.create(req.body);
    if (!token) {
      throw new ErrorGeneric('Incorrect email or password');
    }

    return res.status(200).json({ token });
  }

  validateAuth = async (req: Request, res: Response) => {
    const verify = { ...req.body };
    return res.status(200).json({ message: verify });
  };
}
