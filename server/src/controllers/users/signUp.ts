import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { signToken, signUpSchema, verifyCode } from '../../utils';
import { signUpQuery } from '../../database';

const signup = async (req: Request, res: Response) => {
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
    const token = await signToken({ id, username, email });
    res
      .cookie('token', token)
      .status(201)
      .json({ message: ' Account created successfully' });
  } else {
    res.status(400).json({ message: 'Invalid verification code' });
  }
};
export default signup;
