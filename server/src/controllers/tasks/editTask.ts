import { Request, Response } from 'express';
import { editTaskQuery } from '../../database';

const editTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const taskId = Number(id);
  const { name, description, priority, endDate, status } = req.body;
  const { rows } = await editTaskQuery({
    id: taskId,
    name,
    description,
    priority,
    endDate,
    status,
  });
  res
    .status(200)
    .json({ data: rows[0], message: 'The task updated successfully!' });
};

export default editTask;
