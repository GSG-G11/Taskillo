import { Request, Response } from 'express';

const clientError = (req: Request, res: Response) => {
  res.status(404).json({ message: 'page not found' });
};

export default clientError;
