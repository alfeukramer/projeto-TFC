import { compare } from 'bcryptjs';
import ErrorGeneric from '../errors/missingFields';
import ErrorGenericPassword from '../errors/passwordValidate';
import { ILogin } from '../interfaces/ILogin';
import User from '../models/user.model';
import generateToken from '../utils/jwtValidate';

export default class LoginService {
  public userModel = User;

  async create(login: ILogin): Promise<any> {
    const { email, password } = login;

    const user = await this.userModel.findOne({ where: { email } });

    if (!user) {
      throw new ErrorGeneric('Incorrect email or password');
    }

    const cryptPassword = await compare(password, user.password);
    if (!cryptPassword) {
      throw new ErrorGenericPassword('Incorrect email or password');
    }

    const token = generateToken(user.id, user.role);
    return token;
  }
}
