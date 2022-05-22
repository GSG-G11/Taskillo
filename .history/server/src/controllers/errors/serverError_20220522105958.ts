import { Request, Response } from 'express';

const serverError = (err: any, req: Request, res: Response) => {
  console.log(err);
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.details[0].message });
  } if (err.message === 'Twilio Erorr' || err.message === 'Cloudinary Error') {
    return res.status(503).json({ message: 'Web Service Error!' });
  }
  return res.status(500).json({ message: 'Server Error!' });
};

export default serverError;
