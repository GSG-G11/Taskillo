import connection from '../../config/connection';

const getTasksQuery = () => {
  const sql = {
    text: 'select * from tasks',
    values: [],
  };
  return connection.query(sql);
};

export default getTasksQuery;
