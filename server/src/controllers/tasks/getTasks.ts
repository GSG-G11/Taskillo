import { getTasksQuery } from '../../database';

const getTasks = async (req: any, res: any) => {
  const { id } = req.userInformation;
  const { rows, rowCount } = await getTasksQuery(id);
  console.log(rows, rowCount);
  if (!rowCount) return res.status(204).json({ massage: 'No Task Yet ' });
  return res.status(200).json({ data: rows, massage: 'Success' });
};

export default getTasks;
