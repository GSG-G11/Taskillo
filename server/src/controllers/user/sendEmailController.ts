import { NextFunction, Request, Response } from 'express';
import { sendCode, sendEmailSchema } from '../../utils';
import { customError } from '../errors';

const sendEmailController = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  try {
    await sendEmailSchema.validateAsync({ email });

    await sendCode(email);

    res.status(200).json({
      message: 'Email sent successfully',
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(customError(err.details[0].message, 400));
    }
    next(err);
  }
};

export default sendEmailController;