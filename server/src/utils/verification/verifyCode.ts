import { NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const {
  env: { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN },
} = process;

const twilioClient = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const verifyCode = async (req: any, res: any, next: NextFunction) => {
  const { email, code } = req.body;
  try {
    const verification = await twilioClient.verify
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({ to: `${email}`, code });
    if (verification.status === 'approved') {
      res.status(200).json({ message: 'Account verified successfully' });
    }
    res.status(400).json({ message: 'Invalid verification code' });
  } catch (error) {
    next(error);
  }
};

export default verifyCode;
