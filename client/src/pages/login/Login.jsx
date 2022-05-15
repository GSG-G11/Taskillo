import React from 'react'
import { Form, FormField, SubmitButton } from "../../components";
import { validationSchema } from "../../utils";
import logo from "../../images/logo.svg";
import login from "../../images/login.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

export default function Login() {
  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
  };


  return (
    <div className='d-flex flex-row-reverse left-side min-vh-100'>
      <div className="container col-6 ms-5">
        <div className="mt-4 d-flex align-items-center w-50">
          <img src={logo} alt="logo" className='me-2' />
          <p className="text-white fs-5 fw-bold mb-0">Taskillo</p>
        </div>
        <div className='mt-5'>
          <h3 className="text-white fw-bold"> Start For Free</h3>
          <h1 className="text-white fw-bold">Let&apos;s Go !!</h1>
        </div>
        <div className="mt-3">
          <Form initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className='my-5'>
              <FormField type='email' name='email' placeholder='Email Address' className='text-white shadow-lg mb-3 w-75' />
              <FormField type='password' name='password' placeholder='Password' className='text-white shadow-lg mb-3 w-75' />
            </div>

            <div>
              <SubmitButton title='Sign in' className={'btn btn-primary w-75 btn-lg mb-3'} />
              <SubmitButton title='Sign in with Google' className={'btn btn-light w-75 btn-lg gooleBtn'} />
              <div className='w-75 text-white mt-2 d-flex justify-content-center'>Create a new  an account &nbsp; <a href="#" className='text-decoration-none'>Sign up</a></div>
            </div>
          </Form>
        </div>
      </div>

      <div className='col-6 d-flex justify-content-center align-items-center text-center right-side '>
          <img src={login} alt="login" className='img-fluid mx-auto w-50'/>

      </div>
    </div>
  )
};




