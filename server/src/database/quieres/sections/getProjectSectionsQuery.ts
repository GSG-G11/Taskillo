import { connection } from '../../config';

const getProjectSectionsQuery = (projectId: number) => {
  const sql = {
    text: `SELECT * FROM sections WHERE projectId = $1`,
    values: [projectId],
  };

  return connection.query(sql);
};

export default getProjectSectionsQuery;
