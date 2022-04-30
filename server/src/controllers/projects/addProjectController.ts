import { Response, Request, NextFunction } from 'express';
import { addProjectQuery, addUserProjectsQuery } from '../../database';
import { addProjectSchema } from '../../utils';
import customError from '../errors';

const addProject = async (req: Request, res: Response, next: NextFunction) => {
  // userId from cookies
  const userId = 2;
  const { name, description } = req.body;
  try {
    // validate user input
    await addProjectSchema.validateAsync(req.body);

    // add project to database
    const { rows } = await addProjectQuery(name, description);

    // add project to user_project table
    addUserProjectsQuery(userId, rows[0].id, 'owner');

    // send response
    res.status(201).json({
      data: rows[0],
      message: 'The project has been added successfully',
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errorList = [];
      error.details.forEach((err: Error) => errorList.push(err.message));
      next(customError(errorList, 400));
    } else {
      next(error);
    }
  }
};

export default addProject;
