import connection from '../../config/connection';

const getTasksQuery = (userId) => {
  const sql = {
    text: 'select * from tasks join user_Tasks on user_Tasks.taskId = tasks.id  where user_Tasks.userId =$1 ',
    values: [userId],
  };
  return connection.query(sql);
};

export default getTasksQuery;
