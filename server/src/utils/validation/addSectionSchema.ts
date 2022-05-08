import Joi from 'joi';

const addSectionSchema = Joi.object({
  name: Joi.string().required(),
  projectId: Joi.number().required(),
});

export default addSectionSchema;
