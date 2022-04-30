import connection from '../../config/connection';

const deleteTaskQuery = (userId: number) => {
  return connection.query({
    text: 'DELETE FROM tasks join user_tasks on tasks.id = user_tasks.taskId join users on users.id = user_task.userId WHERE userId=$1',
    values: [userId],
  });
};

export default deleteTaskQuery;
