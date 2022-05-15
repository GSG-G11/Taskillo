import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { checkEmailQuery } from '../../database';
import { signInSchema, signToken } from '../../utils';

const login = async (req: Request, res: Response) => {
  const { email, password } = await signInSchema.validateAsync(req.body, { abortEarly: false });
  const { rows, rowCount } = await checkEmailQuery(email);
  if (!rowCount) {
    res.status(401).json({ message: 'Invalid Email or Password' });
  }
  const { password: hashedPassword, id, username } = rows[0];
  const isMatched = await compare(password, hashedPassword);
  if (isMatched) {
    const token = await signToken({ id, username, email });
    res.cookie('token', token, { httpOnly: true, secure: false })
      .status(200).json({ message: 'login successfully!', token });
  } else {
    res.status(400).json({ message: 'Invalid Email or Password' });
  }
};

export default login;
