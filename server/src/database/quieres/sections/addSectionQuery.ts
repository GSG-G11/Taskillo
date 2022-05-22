import { connection } from '../../config';

const addSectionQuery = ({ name, projectId }: {name: string, projectId: number}) => {
  const sql = {
    text: `INSERT INTO sections (name, projectId) VALUES ($1, $2) RETURNING *`,
    values: [name, projectId],
  };
  return connection.query(sql);
};

export default addSectionQuery;
