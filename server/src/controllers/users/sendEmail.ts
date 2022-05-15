import { Request, Response } from 'express';
import { sendCode, sendEmailSchema } from '../../utils';

const sendEmail = async (req: Request, res: Response) => {
  const { email } = req.body;
  await sendEmailSchema.validateAsync({ email });
  await sendCode(email);
  res.status(200).json({
    message: 'Email sent successfully',
    data: { email },
  });
};

export default sendEmail;
