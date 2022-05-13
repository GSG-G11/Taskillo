import React from 'react'
import axios from 'axios'
import Form from '../components/Form/Form'
import { validationSignUpSchema } from '../utils'
import { FormField, SubmitButton } from '../components';

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
    <div>
     <Form  
        initialValues={ {username:'', code:'',password:''}}
        validationSchema= {validationSignUpSchema}
        onSubmit={handleSubmit} >
        <FormField type='text' name='username' placeholder='Enter your username' />
        <FormField type='password' name='password' placeholder='Enter your password' />
        <FormField  type='number' name='code' placeholder='Enter  verification code'/>
        <SubmitButton  title='Sign Up'/>

    </Form>

    </div>
  )
}
