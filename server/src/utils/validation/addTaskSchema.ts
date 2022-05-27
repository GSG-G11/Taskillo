import Joi from 'joi';

const addTaskSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow('').optional(),
  enddate: Joi.date().allow('').optional(),
});
export default addTaskSchema;
