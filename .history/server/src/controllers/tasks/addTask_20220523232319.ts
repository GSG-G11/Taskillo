import { addTaskQuery, addUserTaskQuery } from '../../database';
import { addTaskSchema } from '../../utils/validation';

const addTask = async (req: any, res: any) => {
  console.log(req.body);
  const { id } = req.userInformation;
  const { name, description, priority, endDate, status, sectionid } = req.body;
  // await addTaskSchema.validateAsync({ name, description, endDate });
  const { rows } = await addTaskQuery({
    name,
    description,
    priority,
    endDate,
    status,
    sectionid,
  });
  const taskId = rows[0].id;
  const userId = id;
  await addUserTaskQuery({ userId, taskId });
  res.status(201).json({ data: rows[0], message: ' Task added successfully!' });
};
export default addTask;
