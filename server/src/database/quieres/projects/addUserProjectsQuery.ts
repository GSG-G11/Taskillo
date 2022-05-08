import connection from '../../config/connection';

interface UserProject {
  userId: number;
  projectId: number;
  role: string;
}

const addUserProjectsQuery = (userProject: UserProject) => {
  const sql = {
    text: `
        INSERT INTO user_projects (userId, projectId, role) VALUES ($1, $2, $3);
        `,
    values: [userProject.userId, userProject.projectId, userProject.role],
  };

  return connection.query(sql);
};

export default addUserProjectsQuery;
