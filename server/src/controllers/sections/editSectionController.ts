import { NextFunction, Request, Response } from 'express';
import { editSectionQuery } from '../../database';
import { addSectionSchema } from '../../utils';
import { customError } from '../errors';

const editSectionController = async (req: Request, res: Response, next: NextFunction) => {
  const { name, projectId } = req.body;
  const { id } = req.params;
  try {
    // validate user input
    await addSectionSchema.validateAsync(req.body);

    // update section in database
    const { rows } = await editSectionQuery(+id, name, +projectId);

    // send response
    res.status(200).json({
      data: rows[0],
      message: 'Section Updated successfully',
    });
  } catch (error) {
    // send error response
    if (error.name === 'ValidationError') {
      next(customError(error.details[0].message, 400));
    } else {
      next(error);
    }
  }
};

export default editSectionController;
