import { Request, Response } from 'express';
import { sendCode, sendEmailSchema } from '../../utils';

const sendEmail = async (req: Request, res: Response) => {
  const { email } = req.body;
  const result = await sendEmailSchema.validateAsync({ email });
  console.log(result);
  await sendCode(email);
  res.status(200).json({
    message: 'Email sent successfully',
  });
};

export default sendEmail;
