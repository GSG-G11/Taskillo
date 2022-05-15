import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from '../../components/Form/Form';
import './style.css';
import signup from '../../images/signup.svg';
import { validationSignUpSchema } from '../../utils';
import {
  Button,
  FormField,
  Image,
  Logo,
  SubmitButton,
  Text,
} from '../../components';

export default function Signup() {
  const navigate = useNavigate();
  const handleSubmit = async (signupData) => {
    
    try {
      const { data } = await axios.post('/api/v1/user/signup', signupData);
      if (data.status === 200) {
        // Redirect user to home page and show message 'Account created successfully'
         navigate('/home');
      
      } else {
        //Still user in same page and shoe massage 'Invalid verification code'
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='d-flex'>
      <div className='col-6 container d-flex flex-column m-auto'>
        <div className='d-flex flex-row justify-content-left w-50 m-auto'>
          <Logo />
          <Text text='Taskillo' className='fs-5 text-white fw-bold' />
        </div>
        <div className='form-side d-flex flex-column m-auto'>
          <Text text='Start For Free' className='fs-5 text-white mb-2 mt-5' />
          <Text text='Create an account' className='fs-2 text-white mb-4' />
          <Form
            initialValues={{ username: '', code: '', password: '' }}
            validationSchema={validationSignUpSchema}
            onSubmit={handleSubmit}
          >
            <FormField
              type='text'
              name='username'
              placeholder='Enter your username'
              className='mb-2 text-white shadow-lg input'
            />
            <FormField
              type='password'
              name='password'
              placeholder='Enter your password'
              className='mb-2 text-white shadow-lg input'
            />
            <FormField
              type='number'
              name='code'
              placeholder='Enter verification code'
              className='mb-2  text-white shadow-lg input'
            />
            <SubmitButton
              title='Sign Up'
              className='btn btn-primary btn-submit mb-3'
            />
            <Button
              title='Sign up with Google'
              className='signup-google btn-submit mb-3'
            />

            <div className='d-flex  align-items-center'>
            <Text text='Already have an account ?' className='signup-text w-50 ' />
            <Link to='/home' className='text-decoration-none'>
              Sign in{' '}
            </Link>
            </div>
           
          </Form>
        </div>
      </div>
      <div className='col-6 w-50 vh-100 text-center test d-lg-flex justify-content-center align-items-center d-none'>
        <Image
          alt='signup-img'
          src={signup}
          className='img-fluid mx-auto w-50 '
        />
      </div>
    </div>
  );
}
