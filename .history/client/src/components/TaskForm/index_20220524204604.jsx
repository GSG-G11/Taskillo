import { useDispatch, useSelector } from "react-redux";
import { setTaskOpen } from "../../state/modal";
import { FormField, Form, SubmitButton } from "../Form";
import { Button } from "../UI";

const TaskForm = ({ handleSubmit, values = {}, id }) => {
  const dispatch = useDispatch();
  const { openTask } = useSelector((state) => state.modal.value);
  const { type } = useSelector((state) => state.action.value);
  let initialValues =
    type === "Add"
      ? { name: "", priority: "", status: "", enddate: "", description: "", sectionid: {id} }
      : values[0];
  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit}>
      <div className="form-body">
        <div className="form-group">
          <label>Task Name</label>
          <FormField name="name" placeholder="Example: Design Profile Page" />
        </div>
        <div className="form-group">
          <label>Task Description</label>
          <FormField
            name="description"
            placeholder="Example: lorem ipsum dolor sit amet, consectetur adipiscing.."
            value={initialValues.description || }
          />
        </div>
        <div className="form-group">
          <label>Priority</label>
          <FormField as="select" name="priority">
            <option>Select Priority</option>
            <option value="Low">Low</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
          </FormField>
        </div>
        <div className="form-group">
          <label>Status</label>
          <FormField as="select" name="status">
            <option className="option-default">Select Staus</option>
            <option value="Todo">To Do</option>
            <option value="InProgress">In Progress</option>
            <option value="Done">Done</option>
            <option value="Cancelled">Cancelled</option>
          </FormField>
        </div>
        <div className="form-group">
          <label>End Date</label>
          <FormField type="date" name="enddate" />
        </div>
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
