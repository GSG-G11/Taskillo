import connection from '../../config/connection';

const getTasksQuery = () => {
  const sql = {
    text:'',
    values:[],
  };
  return connection.query(sql);
};

export default getTasksQuery;