import { sign } from 'jsonwebtoken';

const signToken = (payload: object) => new Promise((resolve, reject) => {
  sign(payload, process.env.SECRET_KEY, (err: Error, token: string) => {
    if (err) return reject(err);
    return resolve(token);
  });
});

export default signToken;
