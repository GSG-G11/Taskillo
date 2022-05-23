import { useDispatch, useSelector } from 'react-redux';
import { setTaskOpen } from '../../state/modal';
import { FormField, Form, SubmitButton } from '../Form';
import { Button } from '../UI';

const TaskForm = ({ handleSubmit, values = {} }) => {
  const dispatch = useDispatch();
  const { openTask } = useSelector((state) => state.modal.value);
  const { type } = useSelector((state) => state.action.value);
  let initialValues =
    type === 'Add'
      ? { name: '', priority: '', status: '', enddate: '' }
      : values;
  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit}>
      <div>
        <label>Task Name</label>
        <FormField
          type="text"
          name="name"
          placeholder="Example: Design Profile Page"
        />
      </div>
      <div>
        <label>Task Description</label>
        <FormField
          type="text"
          name="name"
          placeholder="Example: lorem ipsum dolor sit amet, consectetur adipiscing.."
        />
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
          <option value='none'>Select Staus</option>
          <option value="Todo">To Do</option>
          <option value="InProgress">In Progress</option>
          <option value="Done">Done</option>
          <option value="Cancelled">Cancelled</option>
        </FormField>
      </div>
      <div>
        <label>End Date</label>
        <FormField type="date" name="enddate" />
      </div>
      <div className="modal-footer">
        <SubmitButton
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
