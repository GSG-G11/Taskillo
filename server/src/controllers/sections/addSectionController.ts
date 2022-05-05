import { NextFunction, Request, Response } from 'express';
import { addSectionQuery } from '../../database';
import { addSectionSchema } from '../../utils';
import { customError } from '../errors';

const addSectionController = async (req: Request, res: Response, next: NextFunction) => {
  const { name, projectId } = req.body;
  try {
    // validate user input
    await addSectionSchema.validateAsync(req.body);

    // add section to database
    const { rows } = await addSectionQuery(name, projectId);

    // send response
    res.status(201).json({
      data: rows[0],
      message: 'Section added successfully!',
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

export default addSectionController;
