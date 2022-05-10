import { Response } from 'express';
import { getProjectsQuery } from '../../database';

const getProjects = async (req: any, res: Response) => {
  const { id } = req.userInformation;
  const { rows, rowCount } = await getProjectsQuery(id);
  if (!rowCount) return res.status(200).json({ message: 'No data found' });
  return res.status(200).json({ data: rows, message: 'Success' });
};

export default getProjects;
