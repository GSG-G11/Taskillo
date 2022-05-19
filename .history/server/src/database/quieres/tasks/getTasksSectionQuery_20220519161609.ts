import connection from '../../config/connection';

const getTasksSectionQuery = (id) => {
  const sql = {
    text: ,
    values: [id],
  };
  return connection.query(sql);
};

export default getTasksSectionQuery;
