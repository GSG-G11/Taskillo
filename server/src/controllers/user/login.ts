import { Request, Response, NextFunction } from 'express';
import { compare } from 'bcrypt';
import { checkEmailQuery } from '../../database';
import { signInSchema, signToken } from '../../utils';
import { customError } from '../errors';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = await signInSchema.validateAsync(req.body, { abortEarly: false });
    const { rows, rowCount } = await checkEmailQuery(email);
    if (!rowCount) {
      throw customError('Invalid Email or Password', 401);
    }
    const { password: hashedPassword, id, username } = rows[0];
    const isMatched = compare(password, hashedPassword);
    if (isMatched) {
      const token = await signToken({ id, username });
      res.cookie('token', token, { httpOnly: true, secure: false })
        .status(200).json({ message: 'login successfully!' });
    } else {
      throw customError('Invalid Email or Password', 400);
    }
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errorList = [];
      err.details.forEach((error: Error) => { return errorList.push(error.message); });
      next(customError(errorList, 400));
    } else {
      next(err);
    }
  }
};

export default login;
