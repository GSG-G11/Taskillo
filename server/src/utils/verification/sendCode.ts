import dotenv from 'dotenv';

dotenv.config();

const {
  env: { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_VERIFY_SERVICE_SID },
} = process;

const twilioClient = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const sendCode = (email: string) => {
  return new Promise((resolve, reject) => {
    twilioClient.verify
      .services(TWILIO_VERIFY_SERVICE_SID)
      .verifications.create(
        {
          channelConfiguration: {
            from: 'na86@smail.ucas.edu.ps', // we will replace it later with the real one
          },
          to: `${email}`,
          channel: 'email',
        },
        (error: Error, verification: any) => {
          if (error) {
            return reject(Error('Twilio Erorr'));
          }
          return resolve(verification.status);
        },
      );
  });
};

export default sendCode;
