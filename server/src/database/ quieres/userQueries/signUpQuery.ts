import connection from '../../config/connection';

const signUpQuery = ({ username, password, code }) => {
  const sql = {
    text: 'INSER INTO users (username,password,code) VALUES ($1,$2,$3) Returning id,username,code',
    values: [username, password, code]
  };
  return connection.query(sql);
};
export default signUpQuery;
