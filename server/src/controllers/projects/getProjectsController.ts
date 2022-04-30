import { Response, Request } from 'express';
import { getProjectsQuery } from '../../database';

const getProjects = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const { rows } = await getProjectsQuery(userId);
    if (!rows) return res.status(204).json({ message: 'No data found' });
    return res.status(200).json({ data: rows, message: 'Success' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default getProjects;
