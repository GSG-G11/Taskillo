import { Response, Request } from 'express';
import { editProjectQuery } from '../../database';

const editProject = async (req: Request, res: Response) => {
  const { projectid } = req.params;
  const { name, description } = req.body;
  const projectId = +projectid;
  const { rows } = await editProjectQuery({ projectId, name, description });
  res.status(200).json({ data: rows[0], message: 'Project edited' });
};

export default editProject;
