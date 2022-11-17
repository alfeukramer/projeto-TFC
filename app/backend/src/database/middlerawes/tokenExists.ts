import { NextFunction, Request, Response } from 'express';
import { authToken } from '../utils/jwtValidate';
import MissingToken from '../errors/missingToken';

const tokenValidation = async (req: Request, res: Response, _next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new MissingToken('Token not found');
  }

  try {
    await authToken(authorization);
    return _next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default tokenValidation;
