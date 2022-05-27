import connection from '../../config/connection';

const getTasksQuery = ({ userid, page = 1, perPage = 7 }) => {
  const sql = {
    text: `select
    t.id, t.name,t.description, t.priority,t.enddate ,t.status, p.name as projectname
    from tasks t join user_Tasks ut on ut.taskId= t.id 
    join sections s on s.id = t.sectionid
    join projects p on s.projectid = p.id
    where ut.userid = $1`,
    values: [userid],
  };
  return connection.query(sql);
};

export default getTasksQuery;
