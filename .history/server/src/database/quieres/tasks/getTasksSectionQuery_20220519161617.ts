import connection from '../../config/connection';

const getTasksSectionQuery = (id: n) => {
  const sql = {
    text: `
    select t.id as taskId, t.name as taskTitle, t.description, t.priority, t.endDate, t.sectionId,
    s.name as sectionId 
    from tasks t join sections s 
    on t.sectionid = s.id 
    where s.projectid = $1
    `,
    values: [id],
  };
  return connection.query(sql);
};

export default getTasksSectionQuery;
