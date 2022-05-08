import Joi from 'joi';

const sendEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

export default sendEmailSchema;
