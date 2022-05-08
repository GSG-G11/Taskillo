import connection from '../../config/connection';

const deleteProjectQuery = (id: number) => {
  const sql = {
    text: 'DELETE FROM projects WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};

export default deleteProjectQuery;
