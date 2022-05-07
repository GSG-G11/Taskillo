import Joi from 'joi';

const addTaskSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  description: Joi.string().required(),
  endDate: Joi.date().required(),
});
export default addTaskSchema;
