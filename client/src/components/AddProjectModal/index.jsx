import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormField, SubmitButton } from '../../components';
import './style.css';
import { BiX } from "react-icons/bi";
import { setProjectOpen } from '../../state/modal';
import { addProjectValidationSchema } from '../../utils'
import { Button, Text } from '../UI';
import axios from 'axios';
import swal from 'sweetalert';


export default function AddProjectModal() {
  const { openProject } = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  const handleSubmit = async (projectInfo) => {
    try {
      const res = await axios.post('/api/v1/project', projectInfo)
      if (res.status === 201) {
        dispatch(setProjectOpen(false));
        swal("Good job!", res.data.message, "success");
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {
        openProject ?
          <div className='modall' onClick={() => dispatch(setProjectOpen(false))}>
            <div className='content' onClick={(e) => e.stopPropagation()}>
              <span className='close-model' onClick={() => dispatch(setProjectOpen(false))}>
                <BiX className='bix' />
              </span>
              <Form initialValues={{ name: '', description: '' }}
                validationSchema={addProjectValidationSchema}
                onSubmit={handleSubmit}
              >
                <Text text={'Add new project'} className={'mt-2 ms-1'} />
                <FormField type={'text'} name={'name'} placeholder={'name of project'} className="shadow-lg project-name" />
                <FormField type={'text'} name={'description'} placeholder={'description'} className="shadow-lg project-desc" />
                <div className='d-flex justify-content-center align-items-center mt-4'>
                  <SubmitButton title="Sign In" className="btn btn-primary submit-btn me-2" />
                  <Button title={'Cancel'} className={'cancel-btn'} onClick={() => dispatch(setProjectOpen(false))} />
                </div>
              </Form>
            </div>
          </div>
          : ''
      }
    </div>
  )
}
