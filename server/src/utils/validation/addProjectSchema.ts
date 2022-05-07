import Joi from 'joi';

const addProjectSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});

export default addProjectSchema;
