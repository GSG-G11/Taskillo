import { dragTaskQuery } from '../../database';

const dragTask = async (req: any, res: any) => {
  const { taskId, destinationSection } = req.body;
  const { rows } = await dragTaskQuery({
    taskId,
    sectionId: destinationSection,
  });
  res.status(200).json({ data: rows, message: ' Task updates successfully!' });
};

export default dragTask;
