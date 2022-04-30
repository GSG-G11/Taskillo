import connection from '../../config/connection';

const deleteTaskQuery = (id: number) => {
  return connection.query({
    text: 'DELETE FROM tasks join user_tasks on tasks.id = user_tasks.taskId join users on users.id = user_task.userId WHERE id=$1',
    values: [id],
  });
};

export default deleteTaskQuery;
