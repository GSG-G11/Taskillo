import { Request, Response } from 'express';
import { getProjectSectionsQuery } from '../../database';

const getProjectSections = async (req: Request, res: Response) => {
  const { projectid } = req.params;
  const { rows } = await getProjectSectionsQuery(+projectid);
  if (rows.length > 0) {
    res.status(200).json({
      message: 'Project sections retrieved successfully',
      data: rows,
    });
  } else {
    res.status(204).json({
      message: 'Project sections not found',
    });
  }
};

export default getProjectSections;
