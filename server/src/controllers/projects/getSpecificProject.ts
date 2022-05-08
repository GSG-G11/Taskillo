import { Response, Request } from 'express';
import { getSpecificProjectQuery, getMembersQuery } from '../../database';

const getSpecificProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { rows, rowCount } = await getSpecificProjectQuery(+id);
  const { rows: staff } = await getMembersQuery(+id);
  if (!rowCount) return res.status(204).json({ message: 'No data found' });
  return res.status(200).json({ data: { rows, staff }, message: 'Success' });
};

export default getSpecificProject;
