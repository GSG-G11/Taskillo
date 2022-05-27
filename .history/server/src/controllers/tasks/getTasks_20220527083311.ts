import { getTasksQuery } from '../../database';
import { getAllTasksQuery } from '../../database/quieres/tasks';

const getTasks = async (req: any, res: any) => {
  const { q: page } = req.query;
  const { id: userid } = req.userInformation;
  const { rows, rowCount } = await getTasksQuery({
    userid,
    page,
    perPage: 7,
  });
  if (!rowCount) return res.status(204).json({ message: 'No Task Yet' });
  return res.status(200).json({ data: rows, message: 'Success' });
};

const getAllTasks = async (req: any, res: any) => {
  const { q: page } = req.query;
  const { id: userid } = req.userInformation;
  const { rows, rowCount } = await getAllTasksQuery({
    userid,
    page,
    perPage: 7,
  });
  if (!rowCount) return res.status(204).json({ message: 'No Task Yet' });
  return res.status(200).json({ data: rows, message: 'Success' });
};

export { getTasks, getAllTasks };
