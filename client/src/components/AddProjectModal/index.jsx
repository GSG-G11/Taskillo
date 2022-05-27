import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormField, SubmitButton } from '../../components';
import './style.css';
import { BiX } from 'react-icons/bi';
import { setProjectOpen } from '../../state/modal';
import { addProjectValidationSchema } from '../../utils';
import { Button, Text } from '../UI';
import axios from 'axios';
import { setAddProject } from '../../state';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddProjectModal() {
  const { openProject } = useSelector((state) => state.modal.value);
  const { add } = useSelector((state) => state.addProject.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (projectInfo) => {
    try {
      const res = await axios.post('/api/v1/project', projectInfo);
      if (res.status === 201) {
        dispatch(setProjectOpen(false));
        toast.success(`${res.data.message} 👋`);
        dispatch(setAddProject({ add: !add }));
        navigate(`/project/${res.data.data.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal>
      {openProject ? (
        <div className="modall">
          <div className="content">
            <span
              className="close-model"
              onClick={() => dispatch(setProjectOpen(false))}
            >
              <BiX className="bix" />
            </span>
            <Form
              initialValues={{ name: '', description: '' }}
              validationSchema={addProjectValidationSchema}
              onSubmit={handleSubmit}
            >
              <Text
                text={'Add new project'}
                className={'mt-2 ms-1 text-white'}
              />
              <FormField
                type={'text'}
                name={'name'}
                placeholder={'name of project'}
                className="shadow-lg project-name"
              />
              <FormField
                type={'text'}
                name={'description'}
                placeholder={'description'}
                className="shadow-lg project-desc"
              />
              <div className="d-flex justify-content-center align-items-center mt-4">
                <SubmitButton
                  title="Add"
                  className="btn btn-primary d-flex justify-content-center me-2 submit-btn"
                />
                <Button
                  title={'Cancel'}
                  className={'d-flex justify-content-center cancel-btn'}
                  onClick={() => dispatch(setProjectOpen(false))}
                />
              </div>
            </Form>
          </div>
        </div>
      ) : (
        ''
      )}
    </Modal>
  );
}
const Modal = styled.div`
  .form-control {
    background: #282a36;
    border: none;
    color: #fff;
    padding: 8px;
  }
  @media (max-width: 630px) {
    .submit-btn {
      width: 50%;
      font-size: 0.8rem;
    }
    .cancel-btn {
      width: 50%;
      font-size: 0.8rem;
    }
  }
`;
