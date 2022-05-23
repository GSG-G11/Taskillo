import { number } from 'joi';
import { getTasksQuery } from '../../database';

const getTasks = async (req: any, res: any) => {

  
  const  { q } =req.query ;
  
  const { id: userid } = req.userInformation;
  const { rows, rowCount } = await getTasksQuery({ userid, page:q });
  if (!rowCount) return res.status(204).json({ message: 'No Task Yet ' });
  return res.status(200).json({ data:{rows,rowCount}, message: 'Success' });
};

export default getTasks;
