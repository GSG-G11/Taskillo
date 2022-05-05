import { connection } from '../../config';

const editSectionQuery = (id: number, name: string, projectId: number) => {
  const sql = {
    text: `UPDATE sections SET name = $2, project_id = $3 WHERE id = $1`,
    values: [id, name, projectId],
  };
  return connection.query(sql);
};

export default editSectionQuery;
