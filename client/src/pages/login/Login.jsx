import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from '../../components/Form/Form';
import './Login.css';
import login from '../../images/login.svg';
import { validationLoginSchema } from '../../utils';
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
  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
  };

  return (
    <div className='d-flex flex-row-reverse left-side min-vh-100'>
      <div className='col-6 container d-flex flex-column m-auto'>
        <div className='d-flex flex-row justify-content-left w-50 m-auto'>
          <Logo />
          <Text text='Taskillo' className='fs-5 text-white fw-bold' />
        </div>
        <div className='form-side d-flex flex-column m-auto'>
          <Text text='Start For Free' className='fs-5 text-white mb-2 mt-5' />
          <Text text='Let&apos;s Go!' className='fs-2 text-white mb-4' />
          <Form
            initialValues={{ email: '', password: '' }}
            validationSchema={validationLoginSchema}
            onSubmit={handleSubmit}
          >
            <FormField
              type='email'
              name='email'
              placeholder='Enter your email'
              className='text-white shadow-lg input'
            />
            <FormField
              type='password'
              name='password'
              placeholder='Enter your password'
              className='mt-3 text-white shadow-lg input'
            />
            <SubmitButton
              title='Sign In'
              className='btn btn-primary btn-submit mt-3'
            />
            <Button
              title='Sign in with Google'
              className='signup-google btn-submit mb-3 mt-2'
            />

            <div className='d-flex  align-items-center'>
              <Text text='Create a new account?' className='signup-text w-50 fw-bold' />
              <Link to='/home' className='text-decoration-none'>
                Sign up
              </Link>
            </div>

          </Form>
        </div>
      </div>
      <div className='col-6 w-50 vh-100 text-center test d-flex justify-content-center align-items-center'>
        <Image
          alt='login-img'
          src={login}
          className='img-fluid mx-auto w-50 '
        />
      </div>
    </div>
  );
}
