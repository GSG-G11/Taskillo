import { addTaskQuery, addUserTaskQuery } from '../../database';
import { addTaskSchema } from '../../utils/validation';

const addTask = async (req: any, res: any) => {
  const { id } = req.userInformation;
  const { name, description, priority, enddate, status, sectionid } = req.body;
  await addTaskSchema.validateAsync({ name, description, enddate });
  const { rows } = await addTaskQuery({
    name,
    description,
    priority,
    enddate,
    status,
    sectionid,
  });
  const taskId = rows[0].id;
  const userId = id;
  await addUserTaskQuery({ userId, taskId });
  res.status(201).json({ data: rows[0], message: ' Task added successfully!' });
};
export default addTask;
