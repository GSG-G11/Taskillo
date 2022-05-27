import connection from '../../config/connection';

interface Task {
  id: number;
  name: string;
  description: string;
  priority: string;
  enddate: string;
  status: string;
}

const editTaskQuery = (task: Task) => {
  const sql = {
    text: `UPDATE tasks SET name = $2, description = $3, priority = $4, enddate = $5, status = $6 
          WHERE tasks.id = $1 RETURNING *`,
    values: [task.id, task.name, task.description, task.priority, task.enddate, task.status],
  };
  return connection.query(sql);
};

export default editTaskQuery;
