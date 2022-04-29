import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { singupScheama } from '../../../utils';
import signUpQuery from '../../../database/ quieres';

const signup = async (req: Request, res: Response) => {
  const { username, password} = req.body;
  try {
    await singupScheama.validateAsync(req.body);
    const encryptedPass = await bcrypt.hash(password, 8);
    await signUpQuery({ username, password: encryptedPass});
  } catch (error) {
    console.log(error);
  }
};
export default signup;
