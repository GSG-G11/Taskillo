import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';

export default function Signup() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const handleSubmit = async (signupData) => {
    
    try {
      const res = await axios.post('/api/v1/user/signup', signupData);
      if (res.status === 201) {
        setError('');
        navigate('/');
      }
    } catch (error) {
      setError(error.response.data.message)
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
            initialValues={{ username: '', code: '', password: '', email: user.email}}
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
              type='email'
              name='email'
              placeholder='Enter your email'
              readOnly
              className='mb-2 text-white shadow-lg input'
            />
            <FormField
              type='password'
              name='password'
              placeholder='Enter your password'
              className='mb-2 text-white shadow-lg input'
            />
            <FormField
              type='text'
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
            <Link to='/login' className='text-decoration-none'>
              Sign in
            </Link>
            </div>
            {error && (
              <div className='alert alert-danger mt-4' role='alert'>
                {error}
              </div>
            )}
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
