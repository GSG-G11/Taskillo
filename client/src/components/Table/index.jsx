import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  RiAlignLeft,
  RiAttachment2,
  RiDeleteBinLine,
  RiPencilLine,
} from 'react-icons/ri';
import Modal from '../Modal';
import { Pagination, Text } from '../UI';
import { formatDate } from '../../utils';
import { updateTask, setAction, setTaskOpen } from '../../state';

const TableTask = ({ taskDeleted, count }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.value);
  const { openTask } = useSelector((state) => state.modal.value);
  const [id, setId] = useState(null);
  const task = useSelector((state) => state.task.value);
  const taskFilter = task.filter((task) => task.id === id);
  const page = useSelector((state)=> state.pageType.value);

  console.log(page);
  const handleEdit = async ({
    name,
    description,
    status,
    enddate,
    priority,
  }) => {
    try {
      const Response = await axios.put(`/api/v1/task/${id}`, {
        name,
        description,
        status,
        enddate,
        priority,
      });
      if (Response.status === 200) {
        dispatch(updateTask(Response.data.data));
        dispatch(setTaskOpen(!openTask));
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <Div className="w-100">
      <table className="table">
        <thead>
          <tr className="table-head">
            <th scope="col">Task name</th>
            <th scope="col">Description</th>
            {
              page === 'task' ?   <th scope="col">Project Name</th> : ''
            }
            <th scope="col">Priority</th>
            <th scope="col">Status</th>
            <th scope="col">Due date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <Text text={task.name} className="task-name" />
                  <RiAttachment2 className="icons" />
                  <span className="icons"> 2 </span>
                  <RiAlignLeft className="icons" />
                </td>
                <td>
                  <Text text={task.description || '-'} className="projectt-descriptopn" />
                </td>
              {
                page === 'task' ?  <td>
                <Text text={task.projectname} className="projectt-name" />
              </td> : '' 
              }
                <td>
                  <span
                    className={`btn priority ${task.priority}`}
                  >{task.priority}</span>
                </td>
                <td>
                  <Text text={task.status} className="text-white" />
                </td>
                <td>
                  <Text text={formatDate(task.enddate)} className="icons" />
                </td>
                <td>
                  <button
                    className="action-icons edit-btn btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => {
                      dispatch(setTaskOpen({ openTask: 'true' }));
                      dispatch(setAction({ type: 'Update' }));
                      setId(task.id);
                    }}
                  >
                    <RiPencilLine />
                  </button>
                  <button
                    className="action-icons delete-btn btn"
                    onClick={() => taskDeleted(task.id)}
                  >
                    <RiDeleteBinLine />
                  </button>
                </td>
                {openTask && id === task.id && (
                  <Modal handleSubmit={handleEdit} values={taskFilter} />
                )}
              </tr>
            ))
          ) : (
            <p className="text-white"> no Task</p>
          )}
        </tbody>
      </table>
      <Pagination count={count} />
    </Div>
  );
};

const Div = styled.table`
  .table {
    border-bottom: 1px solid #282a36;
    .table-head {
      color: #818098;
      font-size: 0.8rem;
    }
    .task-name {
      color: #fff;
      font-size: 0.9rem;
    }
    .icons {
      color: #b8b8b8;
      font-size: 0.9rem;
    }
    .projectt-name, .projectt-descriptopn {
      color: #b8b8b8;
    }
    .action-icons {
      border-radius: 5px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      svg {
        transform: scale(2);
      }
      &.edit-btn {
        background-color: rgba(62, 123, 250, 0.2);
        color: #3e7bfa;
        margin-right: 10px;
      }
      &.delete-btn {
        background-color: rgba(255, 46, 38, 0.2);
        color: rgb(255, 46, 38);
      }
    }
    .btn-danger {
      padding: 5px;
      font-size: 0.8rem;
    }
    .btn.priority {
      padding: 1px 4px;
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      color: #fff;
      cursor: auto;
    }
    .High {
      background-color: #f8524b;
      color: #b8b8b8;
    }
    .Low {
      background-color: #06c270;
      color: #b8b8b8;
    }
    .Medium {
      background-color: #ff8800;
      color: #b8b8b8;
    }
  }
`;

export default TableTask;