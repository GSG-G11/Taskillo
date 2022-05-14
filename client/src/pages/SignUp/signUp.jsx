import React from 'react'
import axios from 'axios'
import Form from '../../components/Form/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import './signup.css'
import logo from '../../images/logo.svg'
import { validationSignUpSchema } from '../../utils'
import { FormField, SubmitButton } from '../../components';

export default function Signup() {
 const  handleSubmit = async (signupData) =>{
   try {
     const {data} = await axios.post('/api/v1/user/signup' ,signupData)
     if (data.status === 200) {
    console.log('Account created successfully');
     }else {
      console.log('Invalid verification code');
     }
   } catch (error) {
     console.log(error);
   }
   
  };
  return (
    <div className='d-flex mt-5 ' >
       <div className="col-6 ms-5">
        <div className="top-header d-flex align-items-center">
        <img src={logo} alt="logo website" className='mb-5' />
       
       <h1 className='text-white mb-5 '>Taskillo</h1>
        </div>
         <span className='text-white mb-2'>Start For Free</span>
         <h2 className='text-white mb-4 '>Create an account</h2>
       <Form 
        initialValues={ {username:'', code:'',password:''}}
        validationSchema= {validationSignUpSchema}
        onSubmit={handleSubmit} >
        <FormField  type='text' name='username' placeholder='Enter your username' className='mb-3 w-50 text-white shadow-lg '/>
        <FormField type='password' name='password' placeholder='Enter your password' className='mb-3 w-50 text-white shadow-lg' />
        <FormField  type='number' name='code' placeholder='Enter verification code' className='mb-3 w-50 text-white shadow-lg'/>
        <SubmitButton  title='Sign Up' className='btn btn-primary w-50 mb-3'/>
        <SubmitButton  title='Sign up with Google' className='btn signup-google w-50 mb-3'/>
         <p className='signup-text'>Already have an account ? <a href="#" className='text-decoration-none'> Sign in </a> </p>

    </Form>
       </div>
       <div className="col-6">
     <div className='signup-img'>
       <img src="https://picsum.photos/600/610" alt="" className='img-fluid' />
    </div>
     </div>
     

    </div>
  )
}
