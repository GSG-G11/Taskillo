import { Response, Request } from 'express';
import { deleteProjectQuery } from '../../database';

const deleteProject = async (req: Request, res: Response) => {
  const { projectid } = req.params;
  await deleteProjectQuery(+projectid);
  res.status(200).json({ message: 'The project has been deleted successfuly' });
};

export default deleteProject;
