import { connection } from '../../config';

const editSectionQuery = ({ id, name, projectId }) => {
  const sql = {
    text: `UPDATE sections SET name = $2, projectId = $3 WHERE id = $1 RETURNING *`,
    values: [id, name, projectId],
  };
  return connection.query(sql);
};

export default editSectionQuery;
