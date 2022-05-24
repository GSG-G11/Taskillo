import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import TaskForm from '../TaskForm';
import { setTaskOpen } from '../../state/modal';
import { RiCloseLine } from 'react-icons/ri';

export default function Modal({ handleSubmit, values = {} }) {
  const { openTask } = useSelector((state) => state.modal.value);
  const { type } = useSelector((state) => state.action.value);
  const display = openTask ? 'show' : '';
  const dispatch = useDispatch();
  return (
    openTask && (
      <Modall className={`modal ${display}`} style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{`${type} Task`}</h5>
              <button
                className="btn close-btn"
                onClick={() => dispatch(setTaskOpen(!openTask))}
              >
                <RiCloseLine />
              </button>
            </div>
            <div className="modal-body">
              <TaskForm handleSubmit={handleSubmit} values={values} />
            </div>
          </div>
        </div>
      </Modall>
    )
  );
}

const Modall = styled.div`
.modal-content {
    background: #21222c;
    color: #b1b1b1;
    border-radius: 20px;
    border: none;
    outline: none;
  }
  .close-btn {
    color: #fff;
    transform: scale(1.5);
  }
  .form-control {
    background: #282a36;
    border: none;
    color: #fff;
    padding: 8px;
  }
  .submit-div {
    width: 75%;
  }
  .add-task-btn {
    width: 100%;
  }
  .btn.btn-secondary {
    width: 20%;
  }
  select.option-default {
    color: gray;
  }
  @media (max-width: 630px) {
    .add-task-btn {
      width: 50%;
    }
    .btn.btn-secondary {
      width: 40%;
    }
  }

  .modal {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    .modal-content {
      border-radius: 0.5rem;
      padding: 0;
      .modal-header {
        padding: 1.5rem 2rem;
        svg {
          color: #fcfcfc;
        }
      }
    }
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
    .form-body {
      padding: 1rem 2rem;
      border-color: #525461;
      .form-group {
        margin-bottom: 0.7rem;
        input {
          color: #fff;
        }
      }
    }
  }
  .modal-footer {
    flex-wrap: np-wrap;
    align-items: center;
    border-color: #525461;
    padding: 1rem 2rem;
    * {
      margin: 0;
    }
    .submit-div {
      margin-right: 1rem;
    }
  }
`;
