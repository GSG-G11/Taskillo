import { dragTaskQuery, getOneSectionQuery } from '../../database';

const dragTask = async (req: any, res: any) => {
  const { taskId, destinationSection } = req.body;
  const { rows } = await dragTaskQuery({
    taskId,
    sectionId: destinationSection,
  });
  const response = await getOneSectionQuery(destinationSection);
  const draggedTask = { sectionname: response.rows[0].name, task: rows[0] };

  res.status(200).json({ data: draggedTask, message: ' Task updates successfully!' });
};

export default dragTask;
