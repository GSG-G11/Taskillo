import { connection } from '../../config';

const getProjectSectionsQuery = (projectId: number) => {
  const sql = {
    text: `SELECT * FROM sections WHERE projectId = $1 order by id`,
    values: [projectId],
  };

  return connection.query(sql);
};

export default getProjectSectionsQuery;
