import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (token: string) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET_KEY, (err: Error, decodeToken: any) => {
    if (err) return reject(err);
    return resolve(decodeToken);
  });
});

export default verifyToken;
