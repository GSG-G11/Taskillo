import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { singupScheama } from '../../../utils';

const signup = async (req: Request, res: Response) => {
  const { username, password, code } = req.body;
  try {
    await singupScheama.validateAsync(req.body);
    const encryptedPass = await bcrypt.hash(password, 8);
    await signUpQuery(username, encryptedPass, code);

  } catch (error) {
    console.log(error);
  }
};
export default signup;
