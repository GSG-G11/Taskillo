import dotenv from 'dotenv';

dotenv.config();

const {
  env: { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN },
} = process;

const twilioClient = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const verifyCode = (email: string, code: number) => {
  return new Promise((resolve, reject) => {
    twilioClient.verify
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({ to: `${email}`, code }, (error: Error, verification: any) => {
        if (error) {
          console.log(error);
          return reject(error);
        }
        return resolve(verification.status);
      });
  });
};

export default verifyCode;
