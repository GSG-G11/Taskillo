import { Response, Request } from 'express';
import { deleteProjectQuery } from '../../database';

const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteProjectQuery(+id);
  res.status(200).json({ message: 'The project has been deleted successfuly' });
};

export default deleteProject;
