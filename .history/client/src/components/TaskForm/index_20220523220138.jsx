import { useDispatch, useSelector } from 'react-redux';
import { setTaskOpen } from '../../state/modal';
import { FormField, Form } from '../Form';
import { Button } from '../UI';

const TaskForm = () => {
  const dispatch = useDispatch();
  const { openTask } = useSelector((state) => state.modal.value);
  const { type } = useSelector((state) => state.action.value);

  return (
    <Form initialValues={{ name: '' }} onSubmit={(e) => console.log(e)}>
      <div>
        <label>Task Name</label>
        <FormField type="text" name="name" placeholder="Enter the task name" />
      </div>
      <div>
        <label>Priority</label>
        <FormField as="select" name="priority">
          <option value="Low">Low</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
        </FormField>
      </div>
      <div>
        <label>Status</label>
        <FormField as="select" name="status">
          <option value="Todo">To Do</option>
          <option value="InProgress">In Progress</option>
          <option value="Done">Done</option>
          <option value="Cancelled">Cancelled</option>
        </FormField>
      </div>
      <div>
        <label>End Date</label>
        <FormField
          type="date"
          name="enddate"
          // onChange={(e) => console.log(e)}
        />
      </div>
      <div className="modal-footer">
        <Button
          onClick={(e) => console.log('okk', e)}
          title={`${type} Task`}
          className="btn btn-primary btn-submit add-task-btn"
        />
        <Button
          title="Cancel"
          className="btn btn-secondary"
          onClick={() => dispatch(setTaskOpen(!openTask))}
        />
      </div>
    </Form>
  );
};

export default TaskForm;
