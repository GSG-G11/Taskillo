import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { singupSchema } from '../../../utils';
import signUpQuery from '../../../database/ quieres';

const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(username, password, 'body');
  try {
   const valid = await singupSchema.validateAsync(req.body);
   console.log(valid, 'valid');
   
    const encryptedPass = await bcrypt.hash(password, 8);
    console.log(encryptedPass);
    res.json('signup')
    
    // await signUpQuery({ username, password: encryptedPass });
  } catch (error) {
    console.log(error);
  }

};
export default signup;
