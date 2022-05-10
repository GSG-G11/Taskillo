import connection from '../../config/connection';

const getMembersQuery = (projectId: any) => {
  const sql = {
    text: `
    SELECT u.username, up.role
    FROM
    user_projects up
    join projects p on p.id = up.projectid
    join users u on up.userid = u.id
    where p.id = $1
    `,
    values: [projectId],
  };
  return connection.query(sql);
};

export default getMembersQuery;
