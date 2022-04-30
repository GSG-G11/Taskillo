import connection from '../config/connection';

const getProjectsQuery = (userId: number) => connection.query({
  text: `
  SELECT
    p.name FROM
    user_projects up
    join users u on up.userId = u.id
    join projects p on up.projectId = p.id;
  `,
  values: [userId],
});

export default getProjectsQuery;
