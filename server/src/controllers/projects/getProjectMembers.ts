import { Response, Request } from 'express';
import { getMembersQuery } from '../../database';

const getProjectMembers = async (req: Request, res: Response) => {
  const { projectid } = req.params;
  const { rows, rowCount } = await getMembersQuery(+projectid);
  if (!rowCount) return res.status(204).json({ message: 'No data found' });
  return res.status(200).json({ data: { rows }, message: 'Success' });
};

export default getProjectMembers;
