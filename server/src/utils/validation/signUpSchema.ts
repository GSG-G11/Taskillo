import Joi from 'joi';

const signUpSchema = Joi.object({
  username: Joi.string().required().min(3).max(20),
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  code: Joi.number().min(5).required(),
});

export default signUpSchema;
