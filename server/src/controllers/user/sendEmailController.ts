import { NextFunction, Request, Response } from 'express';
import { sendCode, sendEmail } from '../../utils';
import customError from '../errors';

const sendEmailController = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  try {
    await sendEmail.validateAsync(email);

    const result = await sendCode(email);

    res.status(200).json({
      message: 'Email sent successfully',
      data: result,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(customError(err.message, 400));
    }
    next(err);
  }
};

export default sendEmailController;
