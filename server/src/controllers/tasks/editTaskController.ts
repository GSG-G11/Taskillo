import { Request, Response, NextFunction } from 'express';
import { editTaskQuery } from '../../database';

const editTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const {
      name, description, priority, endDate, status,
    } = req.body;
    const { rows } = await editTaskQuery({
      id, name, description, priority, endDate, status,
    });
    res.status(200).json({ data: rows[0], message: 'The task updated successfully!' });
  } catch (error) {
    next(error);
  }
};

export default editTask;
