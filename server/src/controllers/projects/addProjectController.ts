import { Response, Request, NextFunction } from 'express';
import { addProjectQuery, addUserProjectsQuery } from '../../database';
import { addProjectSchema } from '../../utils';

const addProject = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.userInforamtion;

  const { name, description } = req.body;

  try {
    // validate user input
    await addProjectSchema.validateAsync(req.body);

    // add project to database
    const { rows } = await addProjectQuery(name, description);

    // add project to user_project table
    addUserProjectsQuery(id, rows[0].id, 'owner');

    // send response
    res.status(201).json({
      data: rows[0],
      message: 'The project has been added successfully',
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(error.details[0]);
    } else {
      next(error);
    }
  }
};

export default addProject;
