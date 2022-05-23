import React, { useState } from 'react';
import {
  RiAlignLeft,
  RiAttachment2,
  RiDeleteBinLine,
  RiEdit2Line,
} from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, Pagination, Text } from '../UI';
import Modal from '../modal';
import { setOpen } from '../../state/modal';
import { formatDate } from '../../utils';

const TableTask = ({ taskDeleted, count}) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.value);
  const { open } = useSelector((state) => state.modal.value);
  const [id, setId] = useState(null);
  return (
    <Div className='w-100'>
      <table className='table'>
        <thead>
          <tr className='table-head'>
            <th scope='col'>Task name</th>
            <th scope='col'>Project Name</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Status</th>
            <th scope='col'>Due date</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <Text text={task.name} className='task-name' />
                  <RiAttachment2 className='icons' />
                  <span className='icons'> 2 </span>
                  <RiAlignLeft className='icons' />
                </td>
                <td>
                  <Text text={task.projectname} className='project-name' />
                </td>
                <td>
                  <Button
                    title={task.priority}
                    className={`${task.priority}`}
                  />
                </td>
                <td>
                  <Text text={task.status} className='text-white' />
                </td>
                <td>
                  <Text text={formatDate(task.enddate)} className='icons' />
                </td>
                <td>
                 
                  <RiEdit2Line
                    className='action-icons'
                    data-bs-toggle='modal'
                    data-bs-target='#staticBackdrop'
                    onClick={() => {
                      dispatch(setOpen({ open: 'true' }));
                      setId(task.id);
                    }}
                  />
               
                  <RiDeleteBinLine
                    className='action-icons'
                    onClick={() => taskDeleted(task.id)}
                  />
                </td>
                {
                  open && id === task.id && <Modal id={task.id} />
                }
              </tr>
            ))
          ) : (
            <p className='text-white'> no Task</p>
          )}
        </tbody>
      </table>
      <Pagination count={count}/>
    </Div>
  );
};

const Div = styled.table`
.table{
  border-bottom:1px solid #282A36;
 .table-head{
   color:#818098;
   font-size:0.80rem
 }
 .task-name{
   color:#fff;
   font-size:0.9rem
 }
 .icons{
   color:#B8B8B8;
   font-size:0.9rem
 }
 .project-name{
   color:#B8B8B8
 }
 .action-icons{
   color:#3E7BFA;
   font-size:0.9rem
   border:1px solid #3E7BFA;
   border-radius:5px;
   margin-left:10px
 }
 .btn-danger{
  padding: 5px;
  font-size: 0.80rem;
 }
 .High {
   background-color:red;
   color:#B8B8B8

}

.Low {
  background-color:orange;
  color:#B8B8B8


}

.Medium {
  background-color:rgb(14, 89, 228);
  color:#B8B8B8

}
 
}
`;

export default TableTask;
