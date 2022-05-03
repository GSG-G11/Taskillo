import connection from '../../config/connection';

const editTaskQuery = (
  id: string,
  name: string,
  description: string,
  priority: string,
  endDate: string,
  status: string,
) => {
  const sql = {
    text: 'UPDATE tasks SET name = $2, description = $3, priority = $4, endDate = $5, status = $6 join user_tasks on task.id = user_tasks.taskId join user on user_tasks.userId = user.id WHERE id = $1',
    values: [id, name, description, priority, endDate, status],
  };
  return connection.query(sql);
};

export default editTaskQuery;
