import connection from '../../config/connection';

const getTasksSectionQuery = (id: number) => {
  const sql = {
    text: `
    select t.id as taskId, t.name as taskTitle, t.description, t.priority, t.endDate, t.sectionId, t.status
    s.name as sectionName
    from tasks t join sections s 
    on t.sectionid = s.id 
    where s.projectid = $1
    `,
    values: [id],
  };
  return connection.query(sql);
};

export default getTasksSectionQuery;
