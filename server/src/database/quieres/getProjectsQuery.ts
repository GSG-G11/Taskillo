import connection from '../config/connection';

const getProjectsQuery = (userId: number) => connection.query({
  text: `
  SELECT
    up.userid, p.name FROM
    user_projects up
    join projects p on p.id = up.projectid
    join users u on up.userid = u.id
    where u.id = $1
  `,
  values: [userId],
});

export default getProjectsQuery;
