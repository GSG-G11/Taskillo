import { Response, Request } from 'express';
import { getSpecificProjectQuery, getMembersQuery } from '../../database';

const getSpecificProject = async (req: Request, res: Response) => {
  const { projectid } = req.params;
  const { rows, rowCount } = await getSpecificProjectQuery(+projectid);
  const { rows: staff } = await getMembersQuery(+projectid);
  if (!rowCount) return res.status(204).json({ message: 'No data found' });
  return res.status(200).json({ data: { rows, staff }, message: 'Success' });
};

const { projectid } = req.params;
const { rows, rowCount } = await getSpecificProjectQuery(+projectid);
const { rows: staff } = await getMembersQuery(+projectid);

export default getSpecificProject;
