import connection from '../../config/connection';

const dragTaskQuery = ({ taskId, sectionId }) => {
  const sql = {
    text: `UPDATE tasks SET sectionid = $2 WHERE id = $1 RETURNING *`,
    values: [taskId, sectionId],
  };
  return connection.query(sql);
};

export default dragTaskQuery;
