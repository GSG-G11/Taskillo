import { Response, NextFunction } from 'express';
import { verifyToken } from '../utils';
import { customError } from '../controllers/errors';

const checkAuth = async (req: any, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) {
    next(customError('Unauthorized!', 401));
  } else {
    try {
      const decoded: any = await verifyToken(token);
      req.userInformation = decoded;
      next();
    } catch (e) {
      res.status(401).clearCookie('token').json({ msg: 'Unauthorized!' });
    }
  }
};

export default checkAuth;
