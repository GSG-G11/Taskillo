import connection from '../../config/connection';

const addUserProjectsQuery = (
  userId: number,
  projectId: number,
  role: string,
) => {
  const sql = {
    text: `
        INSERT INTO user_projects (userId, projectId, role) VALUES ($1, $2, $3);
        `,
    values: [userId, projectId, role],
  };

  connection.query(sql);
};

export default addUserProjectsQuery;
