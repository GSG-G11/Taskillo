import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import TaskForm from '../TaskForm';
import { setTaskOpen } from '../../state/modal';
import { setSubmitFunction } from '../../state/action';

export default function Modal({ handleSubmit }) {
  const { openTask } = useSelector((state) => state.modal.value);
  const { type } = useSelector((state) => state.action.value);

  const display = openTask ? 'show' : '';
  const dispatch = useDispatch();
  return (
    <Modall className={`modal ${display}`} style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{`${type} Task`}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                dispatch(setTaskOpen(!openTask));
                dispatch(setSubmitFunction(handleSubmit));
              }}
            ></button>
          </div>
          <div className="modal-body">
            <TaskForm handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </Modall>
  );
}

const Modall = styled.div`
  background: rgba(0, 0, 0, 0.4);
  .modal-content {
    background: #21222c;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    outline: none;
  }
  .form-control {
    background: #323239;
    border: none;
    color: #fff;
  }
  .modal-footer {
    flex-wrap: np-wrap;
    align-items: center;
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1.5rem;
  }
  .add-task-btn {
    width: 100%;
  }
  .btn.btn-secondary {
    width: 20%;
  }
`;
