import { Response, Request } from 'express';
import { editProjectQuery } from '../../database';

const editProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const projectId = +id;
  const { rows } = await editProjectQuery({ projectId, name, description });
  res.status(200).json({ data: rows[0], message: 'Project edited' });
};

export default editProject;
