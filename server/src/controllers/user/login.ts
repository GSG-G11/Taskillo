import { Request, Response, NextFunction } from 'express';
import { compare } from 'bcrypt';
import { checkEmailQuery } from '../../database';
import { signInSchema, signToken } from '../../utils';

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = await signInSchema.validateAsync(req.body, { abortEarly: false });
  const { rows, rowCount } = await checkEmailQuery(email);
  if (!rowCount) {
    next(new Error());
  }
  const { password: hashedPassword, id, username } = rows[0];
  const isMatched = compare(password, hashedPassword);
  if (isMatched) {
    const token = await signToken({ id, username });
    res.cookie('token', token, { httpOnly: true, secure: false })
      .status(200).json({ message: 'login successfully!' });
  } else {
    next(new Error());
  }
};

export default login;
