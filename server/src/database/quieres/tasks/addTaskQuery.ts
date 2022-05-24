import connection from '../../config/connection';

const addTaskQuery = ({
  name, description, priority, enddate, status, sectionid,
}) => {
  const sql = {
    text: 'INSERT INTO tasks (name,description,priority,endDate,status,sectionid) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id,name,description,priority,endDate,status,sectionid',
    values: [name, description, priority, enddate, status, sectionid],
  };
  return connection.query(sql);
};

export default addTaskQuery;
