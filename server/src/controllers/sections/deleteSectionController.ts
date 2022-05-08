import { NextFunction, Request, Response } from 'express';
import { deleteSectionQuery, getOneSectionQuery } from '../../database';

const deleteSectionController = async (req: Request, res: Response, next: NextFunction) => {
  const id = +req.params.id;
  try {
    // delete section from database
    const { rowCount } = await getOneSectionQuery(id);

    if (rowCount > 0) {
      // delete section from database
      await deleteSectionQuery(id);
      // return success message
      res.status(200).json({
        message: 'Section deleted successfully',
      });
    } else {
      // return error message
      res.status(204).json({
        message: 'Section not found',
      });
    }
  } catch (error) {
    // send error response
    next(error);
  }
};

export default deleteSectionController;
