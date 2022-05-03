import connection from '../../config/connection';

const deleteTaskQuery = (id: number) => {
  const sql = {
    text: 'delete from task join user_tasks on task.id = user_tasks.taskId join user on user_tasks.userId = user.id WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};

export default deleteTaskQuery;
