import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { signToken, signUpSchema, verifyCode } from '../../utils';
import { signUpQuery } from '../../database';

const signup = async (req: Request, res: Response, next: NextFunction) => {
  const {
    username, password, email, code,
  } = req.body;
  await signUpSchema.validateAsync(req.body);
  const encryptedPass = await bcrypt.hash(password, 8);
  const checkUserVerify = await verifyCode(email, code);
  if (checkUserVerify === 'approved') {
    const { rows } = await signUpQuery({
      username,
      password: encryptedPass,
      email,
    });
    const { id } = rows[0];
    const token = signToken({ id, username });
    res
      .cookie('token', token)
      .status(200)
      .json({ msg: ' Account created successfully' });
  } else {
    next(new Error());
  }
};
export default signup;
