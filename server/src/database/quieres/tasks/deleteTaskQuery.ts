import connection from '../../config/connection';

const deleteTaskQuery = (id: string) => {
  return connection.query({
    text: 'DELETE FROM tasks WHERE id=$1',
    values: [id],
  });
};

export default deleteTaskQuery;
