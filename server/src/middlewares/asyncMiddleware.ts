import { Response, Request, NextFunction } from 'express';

const asyncMiddleware = (handler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default asyncMiddleware;
