import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { sendCode, singupSchema, verifyCode } from '../../../utils';
import { signUpQuery } from '../../../database/ quieres';
import customError from '../../errors';

const signup = async (req: Request, res: Response, next: NextFunction) => {
  const {
    username, password, email, code,
  } = req.body;
  try {
    await singupSchema.validateAsync(req.body);
    const encryptedPass = await bcrypt.hash(password, 8);
    await sendCode(email);
    const checkUserVerify = await verifyCode(email, code);
    if (checkUserVerify === 'approved') {
      await signUpQuery({ username, password: encryptedPass, email });
      res.status(200).json({ msg: ' Account verified successfully' });
    } else {
      throw customError('Invalid verification code', 400);
    }
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errorList = [];
      err.details.forEach((error) => errorList.push(error.message));
      next(customError(errorList, 400));
    } else {
      next(err);
    }
  }
};
export default signup;
