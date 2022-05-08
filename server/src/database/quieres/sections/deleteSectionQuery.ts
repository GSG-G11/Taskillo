import { connection } from '../../config';

const deleteSectionQuery = (id: number) => {
  const sql = {
    text: `DELETE FROM sections WHERE id = $1`,
    values: [id],
  };

  return connection.query(sql);
};

export default deleteSectionQuery;
