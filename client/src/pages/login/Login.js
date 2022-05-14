import { Form, FormField, SubmitButton } from "../../components/forms";
import React from 'react';
import { Link } from 'react-router-dom';
import { loginValidationSchema } from "../../utils";
import topSideBar from "../../images/topSideBar.svg";
import "./Login.css"

const Login = () => {
  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
  };
  console.log(window.innerWidth)


  return (
    <>
    <div className="rightSide"></div>
    <div className='form'>
      <Form
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        <div className="logo-topSideBar"><img src={topSideBar} alt="log-taskillo" /></div>
        <div className="wellcome-login">
          <p className="startForFree">Start For Free</p>
          <p className="letsGo">Let&apos;s Go !! </p>
        </div>

        <div className="inputField">
          <FormField type="email" placeholder="email" name="email" />
          <FormField type="password" placeholder="password" name="password" />
        </div>

        <div className="loginButtons">
          <SubmitButton title="Sign in" role="primary" />
          <button className="loginWithGoogleBtn">Sign in with Google</button>
        </div>

        <div className="signupInstead">
          <p className="newAccount">
            Create a new  an account &nbsp; <a href="#" className="signUpLink">Sign up</a>
          </p>
        </div>
      </Form>
    </div>
    </>
  );
};
export default Login;
