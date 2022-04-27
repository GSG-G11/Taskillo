import { Response, NextFunction } from 'express';
import { verifyToken } from '../../utils';
import { customError } from '../errors';

const checkAuth = (req: any, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) {
    next(customError('Unauthorized!', 401));
  } else {
    verifyToken(token)
      .then((decoded: any) => {
        req.userInformation = decoded;
        next();
      })
      .catch(() => {
        res.status(401).clearCookie('token').json({ msg: 'Unauthorized!' });
      });
  }
};

export default checkAuth;
