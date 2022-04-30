import connection from '../../config/connection';

const addUserProjectsQuery = (userId: number, projectId: number, role:string) => {
  connection.query({
    text: `
      INSERT INTO user_projects (userId, projectId, role) VALUES ($1, $2, $3);
      `,
    values: [userId, projectId, role],
  });
};

export default addUserProjectsQuery;
