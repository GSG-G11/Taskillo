import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setTaskOpen, setProjectId } from '../../state';
import { FormField, Form, SubmitButton } from '../Form';
import { Button } from '../UI';

const TaskForm = ({ handleSubmit, values = {}, id }) => {
  const dispatch = useDispatch();
  const { openTask } = useSelector((state) => state.modal.value);
  const { type } = useSelector((state) => state.action.value);
  const { userProjects } = useSelector((state) => state.userProjects.value);

  const [sections, setSections] = useState([]);

  const getSections = async (id) => {
    try {
      const response = await axios.get(`/api/v1/project/${id}/sections`);
      if (response.status === 200) {
        setSections(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let initialValues;
  switch (type) {
    case 'Add':
      initialValues = {
        name: '',
        priority: 'Select Priority',
        status: 'Select Status',
        projectid: '',
        enddate: '',
        description: '',
        sectionid: id,
      };
      break;
    case 'calendar':
      initialValues = {
        name: '',
        priority: 'Select Priority',
        status: 'Select Status',
        projectid: '',
        description: '',
        sectionid: 'Select Section',
      };
      break;
    default:
      initialValues = values[0];
      break;
  }

  const onChange = (e) => {
    dispatch(setProjectId(e.target.value));
    getSections(e.target.value);
  };

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
          />
        </div>
        {type === 'calendar' ? (
          <Div>
            <div className="form-group project-div">
              <label>Project Name</label>
              <FormField as="select" name="projectid" onChange={onChange}>
                <option value="Select Project" disabled>
                  Select Project
                </option>
                {userProjects.map(({ name, id }, index) => {
                  return (
                    <option value={id} key={index}>
                      {name}
                    </option>
                  );
                })}
              </FormField>
            </div>
            <div className="form-group section-div">
              <label>Section Name</label>
              <FormField as="select" name="sectionid">
                <option value="Select Section" disabled>
                  Select Section
                </option>
                {sections.map(({ name, id }, index) => {
                  return (
                    <option value={id} key={index}>
                      {name}
                    </option>
                  );
                })}
              </FormField>
            </div>
          </Div>
        ) : (
          ''
        )}
        <div className="form-group">
          <label>Priority</label>
          <FormField as="select" name="priority">
            <option value="Select Priority" disabled>
              Select Priority
            </option>
            <option value="Low">Low</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
          </FormField>
        </div>
        <div className="form-group">
          <label>Status</label>
          <FormField as="select" name="status">
            <option value="Select Status" disabled>
              Select Staus
            </option>
            <option value="Todo">To Do</option>
            <option value="InProgress">In Progress</option>
            <option value="Done">Done</option>
            <option value="Cancelled">Cancelled</option>
          </FormField>
        </div>
        {type === 'calendar' ? (
          ''
        ) : (
          <div className="form-group">
            <label>End Date</label>
            <FormField type="date" name="enddate" />
          </div>
        )}
      </div>
      <div className="modal-footer">
        <SubmitButton
          title={
            type === 'Add' || type === 'calendar' ? 'Add Task' : 'Update Task'
          }
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

const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
  .project-div,
  .section-div {
    width: 49%;
    .form-group {
      margin-bottom: 0.5rem;
    }
  }
`;
