import getTasksQuery from '../../database/ quieres';

const getTasks = async (req: any, res: any) => {
  const { id } = req.userInformation;
  try {
    const { rows, rowCount } = await getTasksQuery(id);
    if (!rowCount) return res.status(204).json({ massage: 'No Task Yet ' });
    return res.status(200).json({ data: rows, massage: 'Success' });
  } catch (error) {
    return res.status(500).json({ msg: error.massage });
  }
};

export default getTasks;
