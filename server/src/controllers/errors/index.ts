import { Request, Response, NextFunction } from 'express';

const clientError = (req: Request, res: Response) => {
  res.status(404).json({ message: 'page not found' });
};

const serverError = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.status) {
    res.status(err.status).json({ message: err.message, status: err.status });
  } else {
    res.status(500).json({ message: 'Server Error', status: 500 });
  }
};

const customError = (message: any, status: any) => {
  const error: any = new Error(message);
  error.status = status;
  return error;
};

export { customError, clientError, serverError };
