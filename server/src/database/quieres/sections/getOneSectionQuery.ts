import { connection } from '../../config';

const getOneSectionQuery = (id: number) => {
  const sql = {
    text: `SELECT * FROM sections WHERE id = $1`,
    values: [id],
  };

  return connection.query(sql);
};

export default getOneSectionQuery;
