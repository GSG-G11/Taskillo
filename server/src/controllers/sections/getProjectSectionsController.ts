import { NextFunction, Request, Response } from 'express';
import { getProjectSectionsQuery } from '../../database';

const getProjectSectionsController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    // Get project sections
    const { rows } = await getProjectSectionsQuery(+id);

    // Send response
    res.status(200).json({
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

export default getProjectSectionsController;
