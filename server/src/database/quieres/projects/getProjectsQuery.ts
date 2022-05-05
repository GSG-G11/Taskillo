import connection from '../../config/connection';

const getProjectsQuery = (userId: number) => {
  const sql = {
    text: `
    SELECT
      up.userid, p.name FROM
      user_projects up
      join projects p on p.id = up.projectid
      join users u on up.userid = u.id
      where u.id = $1
    `,
    values: [userId],
  };
  return connection.query(sql);
};

export default getProjectsQuery;
