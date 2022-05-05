import connection from '../../config/connection';

const checkEmailQuery = (email: string) => {
  const sql = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };
  return connection.query(sql);
};

export default checkEmailQuery;
