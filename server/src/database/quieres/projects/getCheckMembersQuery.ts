import connection from '../../config/connection';

const getCheckMembersQuery = ({ projectid, userid }) => {
  const sql = {
    text: `
      SELECT id
      FROM user_projects
      where projectid = $1 AND userid = $2
      `,
    values: [projectid, userid],
  };
  return connection.query(sql);
};

export default getCheckMembersQuery;
