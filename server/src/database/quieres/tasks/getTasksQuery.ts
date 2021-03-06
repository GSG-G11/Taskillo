import connection from '../../config/connection';

const getTasksQuery = ({ userid, page = 1, perPage = 5 }) => {
  const sql = {
    text: `select
    t.id, t.name,t.description, t.priority,t.enddate ,t.status, p.name as projectname,
    (select count(*) from user_tasks ut where ut.userid = $1) as totaltask
    from tasks t join user_Tasks ut on ut.taskId= t.id 
    join sections s on s.id = t.sectionid
    join projects p on s.projectid = p.id
    where ut.userid = $1
    limit $3 offset ($2-1) * $3`,
    values: [userid, page, perPage],
  };
  return connection.query(sql);
};

const getAllTasksQuery = (userid) => {
  const sql = {
    text: `select t.id, t.name, t.enddate
    from tasks t join user_Tasks ut on ut.taskId= t.id 
    where ut.userid = $1`,
    values: [userid],
  };
  return connection.query(sql);
};
export { getTasksQuery, getAllTasksQuery };
