import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './style.css';
import signup from '../../images/signup.svg';
import { getToken, validationSignUpSchema } from '../../utils';
import {
  Button,
  Form,
  FormField,
  Image,
  Logo,
  SubmitButton,
  Text,
} from '../../components';
import { setUserInfo } from '../../state/user';
import { Field } from 'formik';

export default function Signup() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const handleSubmit = async ({code, username, password}) => {
    const data = {code, username, email: userInfo.email, password}
    try {
      const res = await axios.post('/api/v1/user/signup', data);
      if (res.status === 201) {
        const user = getToken();
        dispatch(setUserInfo(user));
        setError('');
        navigate('/');
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="d-flex">
      <div className="col-6 container d-flex flex-column m-auto">
        <div className="d-flex flex-row justify-content-left w-50 m-auto">
          <Logo />
          <Text text="Taskillo" className="fs-5 text-white fw-bold" />
        </div>
        <div className="form-side d-flex flex-column m-auto">
          <Text text="Start For Free" className="fs-5 text-white mb-2 mt-5" />
          <Text text="Create an account" className="fs-2 text-white mb-4" />
          <Form
            initialValues={{
              username: '',
              code: '',
              password: '',
              email: userInfo.email,
            }}
            validationSchema={validationSignUpSchema}
            onSubmit={handleSubmit}
          >
            <FormField
              type="text"
              name="username"
              placeholder="Enter your username"
              className="mb-2 text-white shadow-lg input"
            />
            <Field
              name="email"
              id="email"
              className='form-control mb-2 text-white shadow-lg input'
              value={userInfo.email}
              readOnly
            />
            <FormField
              type="password"
              name="password"
              placeholder="Enter your password"
              className="mb-2 text-white shadow-lg input"
            />
            <FormField
              type="text"
              name="code"
              placeholder="Enter verification code"
              className="mb-2  text-white shadow-lg input"
            />
            <SubmitButton
              title="Sign Up"
              className="btn btn-primary btn-submit mb-3"
            />
            <Button
              title="Sign up with Google"
              className="signup-google btn-submit mb-3"
            />

            <div className="d-flex  align-items-center">
              <Text
                text="Already have an account ?"
                className="signup-text w-50 "
              />
              <Link to="/login" className="text-decoration-none">
                Sign in
              </Link>
            </div>
            {error && (
              <div className="alert alert-danger mt-4" role="alert">
                {error}
              </div>
            )}
          </Form>
        </div>
      </div>
      <div className="col-6 w-50 vh-100 text-center test d-lg-flex justify-content-center align-items-center d-none">
        <Image
          alt="signup-img"
          src={signup}
          className="img-fluid mx-auto w-50 "
        />
      </div>
    </div>
  );
}
