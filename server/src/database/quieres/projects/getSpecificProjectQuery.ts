import connection from '../../config/connection';

const getSpecificProjectQuery = (projectId: number) => {
  const sql = {
    text: `
    SELECT name, description FROM projects WHERE id = $1;
    `,
    values: [projectId],
  };
  return connection.query(sql);
};

export default getSpecificProjectQuery;
