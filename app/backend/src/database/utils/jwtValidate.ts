import * as jwt from 'jsonwebtoken';

const JWT_SECRET = 'jwt_secret';

const generateToken = (id: number, role: string) => {
  const token = { id, role };
  const verifyToken = jwt.sign(token, JWT_SECRET);
  return verifyToken;
};

export default generateToken;
