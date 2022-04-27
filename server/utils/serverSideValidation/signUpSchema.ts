import Joi from 'joi';

const singupScheama = Joi.object({
  username: Joi.string().required().min(3).max(20),

  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export default singupScheama;
