import React from 'react';
import {
  RiAlignLeft,
  RiAttachment2,
  RiDeleteBinLine,
  RiEdit2Line,
} from 'react-icons/ri';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, Text } from '../UI';

const TableTask = ({taskDeleted}) => {
  const tasks = useSelector((state) => state.task.value);
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
          { (tasks.length) ?
          tasks.map((task) => (
            <tr>
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
                className='btn-danger priority'
              />
            </td>
            <td>
              <Text text={task.status} className='text-white' />
            </td>
            <td>
              <Text text={task.enddate} className='icons' />
            </td>
            <td>
              <RiEdit2Line className='action-icons' />
              <RiDeleteBinLine className='action-icons' onClick={() => taskDeleted(task.id)}/>
            </td>
          </tr>
          ))
          : <p className='text-white'> no Task</p> }
        </tbody>
      </table>
    </Div>
  );
};

const Div = styled.table`
.table{
  border-bottom:1px solid #282A36;
 .table-head{
   color:#818098;
   font-size:0.78rem
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
}
`;

export default TableTask;
