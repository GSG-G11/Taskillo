import connection from '../../config/connection';

const checkEmailQuery = (email: string) => connection.query({
  text: 'SELECT * FROM users WHERE email = $1',
  values: [email],
});

export default checkEmailQuery;
