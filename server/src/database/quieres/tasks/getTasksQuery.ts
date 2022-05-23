import connection from '../../config/connection';

const getTasksQuery = ( { userid, page = 1, perPage = 7 }) => {
  const sql = {
    text: `select DISTINCT on (t.id) t.id, t.name,t.priority,t.enddate,t.status,p.name as projectname from tasks t join user_Tasks ut on ut.taskId= t.id join user_Projects up on ut.userid = up.userid join projects p on up.projectid = p.id where ut.userid = $1 
    limit $3 offset ($2 -1 )* $3`,
    values: [userid, page,perPage],
  };
  return connection.query(sql);
};

export default getTasksQuery;
