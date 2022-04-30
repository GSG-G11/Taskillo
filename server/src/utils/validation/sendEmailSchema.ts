import Joi from 'joi';

const sendEmail = Joi.object({
  email: Joi.string().email().required(),
});

export default sendEmail;
