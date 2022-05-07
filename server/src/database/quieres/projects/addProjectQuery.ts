import connection from '../../config/connection';

const addProjectQuery = (projectName: string, projectDescription: string) => {
  const sql = {
    text: 'INSERT INTO projects (name, description) VALUES ($1, $2) RETURNING *',
    values: [projectName, projectDescription],
  };
  return connection.query(sql);
};

export default addProjectQuery;
