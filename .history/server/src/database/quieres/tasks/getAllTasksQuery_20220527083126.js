import connection from '../../config/connection';

const getTasksQuery = (userid) => {
  const sql = {
    text: `select t.id, t.name, t.enddate
    from tasks t join user_Tasks ut on ut.taskId= t.id 
    where ut.userid = $1`,
    values: [userid],
  };
  return connection.query(sql);
};

export default getTasksQuery;
