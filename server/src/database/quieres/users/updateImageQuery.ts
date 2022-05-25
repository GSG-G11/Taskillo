import connection from '../../config/connection';

const updateImageQuery = ({ id, image }) => {
  const sql = {
    text: `UPDATE users SET image = $2 WHERE id = $1 RETURNING *`,
    values: [id, image],
  };

  return connection.query(sql);
};

export default updateImageQuery;
