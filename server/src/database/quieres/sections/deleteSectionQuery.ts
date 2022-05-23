import { connection } from '../../config';

const deleteSectionQuery = (id: number) => {
  const sql = {
    text: `DELETE FROM sections WHERE id = $1 RETURNING *`,
    values: [id],
  };

  return connection.query(sql);
};

export default deleteSectionQuery;
