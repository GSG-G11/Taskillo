import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const signToken = (payload: object) => {
  return new Promise((resolve, reject) => {
    sign(payload, process.env.SECRET_KEY, (error: any, token: string) => {
      if (error) {
        return reject(error);
      }
      return resolve(token);
    });
  });
};

export default signToken;
