import { NextFunction, Response } from 'express';
import { verifyToken } from '../utils';

const checkAuth = async (req: any, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) res.status(401).json({ message: 'Access denied' });
  const decoded: any = await verifyToken(token);
  req.userInformation = decoded;
  return next();
};

export default checkAuth;
