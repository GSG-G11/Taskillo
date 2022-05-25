import connection from '../../config/connection';

const signUpQuery = ({ username, email, password }) => {
  const sql = {
    text: 'INSERT INTO users (username, email ,password) VALUES ($1,$2,$3) Returning id,username,email,image',
    values: [username, email, password],
  };
  return connection.query(sql);
};
export default signUpQuery;
