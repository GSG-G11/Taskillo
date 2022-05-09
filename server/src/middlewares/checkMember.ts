import { NextFunction, Response } from 'express';
import { getCheckMembersQuery } from '../database';

const checkMember = async (req: any, res: Response, next: NextFunction) => {
  const { id: projectid } = req.params;
  const { id: userid } = req.userInformation;
  const { rowCount } = await getCheckMembersQuery({ projectid, userid });
  if (rowCount) next();
  else {
    res.status(401).json({ message: 'You are not a member of this project' });
  }
};

export default checkMember;
