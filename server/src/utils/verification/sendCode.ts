import dotenv from 'dotenv';
import { NextFunction } from 'express';

dotenv.config();

const {
  env: { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_VERIFY_SERVICE_SID },
} = process;

const twilioClient = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const sendCode = async (req: any, res: any, next: NextFunction) => {
  const { email } = req.body;
  try {
    const verification = await twilioClient.verify
      .services(TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({
        channelConfiguration: {
          from: 'na86@smail.ucas.edu.ps', // we will replace it later with the real one
        },
        to: `${email}`,
        channel: 'email',
      });
    if (verification.status === 'pending') {
      res.status(200).json({
        message: 'The verification code has been sent to your email',
      });
    } else {
      res.status(400).json({ message: 'Error sending verification code' });
    }
  } catch (error) {
    next(error);
  }
};

export default sendCode;
