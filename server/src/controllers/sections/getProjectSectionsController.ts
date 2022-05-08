import { NextFunction, Request, Response } from 'express';
import { getProjectSectionsQuery } from '../../database';

const getProjectSectionsController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    // Get project sections
    const { rows } = await getProjectSectionsQuery(+id);

    // Send response
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
  } catch (error) {
    next(error);
  }
};

export default getProjectSectionsController;
