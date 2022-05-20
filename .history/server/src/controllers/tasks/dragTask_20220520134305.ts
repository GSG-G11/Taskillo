import { dragTaskQuery, getOneSectionQuery } from '../../database';

const dragTask = async (req: any, res: any) => {
  const { taskId, destinationSection } = req.body;
  const { rows } = await dragTaskQuery({
    taskId,
    sectionId: destinationSection,
  });
  const { rows: [name : ] } = await getOneSectionQuery(destinationSection);
  console.log(name);

  res.status(200).json({ data: rows, message: ' Task updates successfully!' });
};

export default dragTask;
