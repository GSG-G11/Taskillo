import { NextFunction, Request, Response } from 'express';
import { deleteSectionQuery } from '../../database';

const deleteSectionController = async (req: Request, res: Response, next: NextFunction) => {
  const id = +req.params.id;
  try {
    // delete section from database
    await deleteSectionQuery(id);

    // send response
    res.status(200).json({
      message: 'Section deleted successfully!',
    });
  } catch (error) {
    // send error response
    next(error);
  }
};

export default deleteSectionController;
