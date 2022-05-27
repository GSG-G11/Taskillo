import connection from '../../config/connection';

const getTasksQuery = (userid) => {
  const sql = {
    text: `select
    t.id, t.name,t.description, t.priority,t.enddate
    from tasks t join user_Tasks ut on ut.taskId= t.id 
    where ut.userid = 2 $1`,
    values: [userid],
  };
  return connection.query(sql);
};

export default getTasksQuery;
