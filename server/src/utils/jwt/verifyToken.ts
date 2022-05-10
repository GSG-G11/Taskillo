import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (token: string) => {
  return new Promise((resolve, reject) => {
    verify(token, process.env.SECRET_KEY, (error: any, decodeToken: any) => {
      if (error) {
        return reject(error);
      }
      return resolve(decodeToken);
    });
  });
};

export default verifyToken;
