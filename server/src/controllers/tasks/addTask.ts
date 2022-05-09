import { Request, Response } from 'express';
import { addTaskQuery } from '../../database';
import { addTaskSchema } from '../../utils/validation';
import { customError } from '../errors';

const addTask = async (req: Request, res: Response) => {
  const { name, description, priority, endDate, status, sectionid } = req.body;
  await addTaskSchema.validateAsync({ name, description, endDate });
  const { rows } = await addTaskQuery({
    name,
    description,
    priority,
    endDate,
    status,
    sectionid,
  });
  res.status(201).json({ data: rows[0], message: ' Task added successfully!' });
};
export default addTask;
