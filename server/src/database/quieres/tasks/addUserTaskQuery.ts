import connection from '../../config/connection';

const addUserTaskQuery = ({
  userId, taskId,
}) => {
  const sql = {
    text: 'INSERT INTO user_Tasks (userid,taskid) VALUES ($1,$2) RETURNING *',
    values: [userId, taskId],
  };
  return connection.query(sql);
};

export default addUserTaskQuery;
