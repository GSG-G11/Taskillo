import { NextFunction } from 'express';
import { getCheckMembersQuery } from '../database';

const checkMember = async (req: any, res: any, next: NextFunction, projectid: any) => {
  const { id: userid } = req.userInformation;
  const { rowCount } = await getCheckMembersQuery({ projectid: +projectid, userid });
  if (rowCount) next();
  else {
    res.status(401).json({ message: 'You are not a member of this project' });
  }
};

export default checkMember;
