import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { updateTask } from '../../state/task';
import TaskForm from '../TaskForm';

export default function Modal({ id }) {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task.value);
  const taskFilter = task.filter((task) => task.id === id);

  const handleSubmit = async ({ name, status, enddate, priority }) => {
    try {
      const Response = await axios.put(`/api/v1/task/${id}`, {
        name,
        status,
        enddate,
        priority,
      });
      if (Response.status === 200) {
        dispatch(updateTask(Response.data.data));
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {' '}
              Update Task
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <TaskForm handleSubmit={handleSubmit} taskFilter={taskFilter} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}