import React from 'react';
import styled from 'styled-components';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

export default function ConfirmModal({ isDelete, setIsDelete, deleteSection }) {
  let display = isDelete ? 'show' : '';
  const currentSection = useSelector((state) => state.currentSection.value);
  return (
    <Modall
      className={`modal fade ${display}`}
      style={{ display: 'block' }}
      id="confirmModal"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Warning</h5>
            <button
              type="button"
              className="btn close-btn"
              onClick={() => setIsDelete(!isDelete)}
            >
              <RiCloseLine />
            </button>
          </div>
          <div className="modal-body">
            <p className="t-message">
              Are you sure you want to delete this section?
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                deleteSection(currentSection.id);
                setIsDelete(!isDelete);
              }}
            >
              Yes, Delete
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsDelete(!isDelete)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modall>
  );
}

const Modall = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  .t-message {
    margin: 20px;
  }
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
  .btn.btn-secondary {
    width: 15%;
  }
  select.option-default {
    color: gray;
  }
  @media (max-width: 630px) {
    .btn.btn-secondary {
      width: 30%;
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
        border: 1px solid #525461;
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
  }
`;
