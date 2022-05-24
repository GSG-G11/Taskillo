import React, { useState } from "react";
import {
  RiAlignLeft,
  RiAttachment2,
  RiDeleteBinLine,
  RiEdit2Line,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button, Pagination, Text } from "../UI";
import Modal from "../modal";
import { setTaskOpen } from "../../state/modal";
import { formatDate } from "../../utils";

const TableTask = ({ taskDeleted, count }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.value);
  const { openTask } = useSelector((state) => state.modal.value);
  const [id, setId] = useState(null);
  return (
    <Div className="w-100">
      <table className="table">
        <thead>
          <tr className="table-head">
            <th scope="col">Task name</th>
            <th scope="col">Project Name</th>
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
                  <Text text={task.projectname} className="project-name" />
                </td>
                <td>
                  <Button
                    title={task.priority}
                    className={`priority ${task.priority}`}
                  />
                </td>
                <td>
                  <Text text={task.status} className="text-white" />
                </td>
                <td>
                  <Text text={formatDate(task.enddate)} className="icons" />
                </td>
                <td>
                  <RiEdit2Line
                    className="action-icons"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => {
                      dispatch(setTaskOpen({ openTask: "true" }));
                      setId(task.id);
                    }}
                  />
                  <RiDeleteBinLine
                    className="action-icons"
                    onClick={() => taskDeleted(task.id)}
                  />
                </td>
                {openTask && id === task.id && <Modal id={task.id} />}
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
    .project-name {
      color: #b8b8b8;
    }
    .action-icons {
      color: #3e7bfa;
      font-size: 0.9rem;
      border: 1px solid #3e7bfa;
      border-radius: 5px;
      margin-left: 10px;
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
