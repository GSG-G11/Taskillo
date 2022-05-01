import connection from '../config/connection';

const editProjectQuery = (
  projecrId: number,
  name: string,
  description: string,
) => {
  const sql = {
    text: 'UPDATE projects SET name = $2, description = $3 WHERE id = $1',
    values: [projecrId, name, description],
  };
  return connection.query(sql);
};

export default editProjectQuery;
