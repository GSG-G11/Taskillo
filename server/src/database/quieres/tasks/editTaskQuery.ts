import connection from '../../config/connection';

interface Task {
  id: number;
  name: string;
  description: string;
  priority: string;
  endDate: string;
  status: string;
}

const editTaskQuery = (task: Task) => {
  const sql = {
    text: `UPDATE tasks SET name = $2, description = $3, priority = $4, endDate = $5, status = $6 
           join user_tasks on task.id = user_tasks.taskId 
           join user on user_tasks.userId = user.id WHERE id = $1 RETURNING *`,
    values: [task.id, task.name, task.description, task.priority, task.endDate, task.status],
  };
  return connection.query(sql);
};

export default editTaskQuery;
