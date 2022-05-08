import { Response, Request } from 'express';
import { getSpecificProjectQuery, getMembersQuery } from '../../database';

const getSpecificProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { rows, rowCount } = await getSpecificProjectQuery(+id);
    const { rows: staff } = await getMembersQuery(+id);
    if (!rowCount) return res.status(204).json({ message: 'No data found' });
    return res.status(200).json({ data: { rows, staff }, message: 'Success' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default getSpecificProject;
