import connection from '../../config/connection';

const signUpQuery = ({ username, password }) => {
  const sql = {
    text: 'INSER INTO users (username,password) VALUES ($1,$2) Returning id,username,code',
    values: [username, password],
  };
  return connection.query(sql);
};
export default signUpQuery;
