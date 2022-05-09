import { Request, Response, NextFunction } from 'express';

const serverError = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  if (err.status) {
    res.status(err.status).json({ message: err.message, status: err.status });
  } else {
    res.status(500).json({ message: 'Server Error', status: 500 });
  }
};

export default serverError;
