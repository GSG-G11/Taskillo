import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import {
  sendCode, signToken, singupSchema, verifyCode,
} from '../../../utils';
import { signUpQuery } from '../../../database/ quieres';
import customError from '../../errors';

const signup = async (req: Request, res: Response, next: NextFunction) => {
  const {
    id, username, password, email, code,
  } = req.body;
  try {
    await singupSchema.validateAsync(req.body, { abortEarly: false });
    const encryptedPass = await bcrypt.hash(password, 8);
    await sendCode(email);
    const checkUserVerify = await verifyCode(email, code);
    if (checkUserVerify === 'approved') {
      await signUpQuery({ username, password: encryptedPass, email });
      const token = signToken({ id, username });
      res.cookie('token', token, { httpOnly: true, secure: true })
         .status(200).json({ msg: ' Account verified successfully' });
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

  
};
export default signup;
