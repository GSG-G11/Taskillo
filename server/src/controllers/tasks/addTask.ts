import { Request, Response, NextFunction } from 'express';
import { addTaskQuery } from '../../database';
import { addTaskSchema } from '../../utils/validation';
import { customError } from '../errors';

const addTask = async (req: Request, res: Response, next: NextFunction) => {
  const {
    name, description, priority, endDate, status, sectionid,
  } = req.body;
  try {
    await addTaskSchema.validateAsync({ name, description, endDate });
    const { rows } = await addTaskQuery({
      name,
      description,
      priority,
      endDate,
      status,
      sectionid,
    });
    res.status(201).json({ data: rows[0], msg: ' Task added successfully!' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(customError(error.details[0].message, 400));
    } else {
      next(error);
    }
  }
};

export default addTask;
