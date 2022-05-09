import connection from '../../config/connection';

interface Project {
  projectId: number;
  name: string;
  description: string;
}

const editProjectQuery = (project: Project) => {
  const sql = {
    text: 'UPDATE projects SET name = $2, description = $3 WHERE id = $1 RETURNING *',
    values: [project.projectId, project.name, project.description],
  };
  return connection.query(sql);
};

export default editProjectQuery;
