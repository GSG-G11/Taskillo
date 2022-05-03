import connection from '../../config/connection';

const getTasksSectionQuery = (id) => {
  const sql = {
    text: 'select * from tasks where sectionId = $1 Returning id,name,description,priority,enddate,status',
    values: [id],
  };
  return connection.query(sql);
};

export default getTasksSectionQuery;
