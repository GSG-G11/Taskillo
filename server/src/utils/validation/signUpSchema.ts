import Joi from 'joi';

const singupScheama = Joi.object({
  username: Joi.string().required().min(3).max(20),
  password: Joi.string().min(8).required(),
  code: Joi.string().min(5).required,
});

export default singupScheama;
