import connection from '../../config/connection';

const getTasksSectionQuery = (id) => {
  const sql = {
    text: 'select * from tasks where sectionid = $1 ',
    values: [id],
  };
  return connection.query(sql);
};

export default getTasksSectionQuery;
