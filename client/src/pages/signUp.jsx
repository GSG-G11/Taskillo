import React from 'react'
import Form from '../components/Form/Form'
import { validationSignUpSchema } from '../utils'
import { FormField, SubmitButton } from '../components';

export default function Signup() {
 const  handleSubmit = async (data) =>{
   fetch('api/v1/user/signup', {
      method:'POST',
      headers: {
        'Content-type':'application/json',
      },
      body:JSON.stringify(data),
   })
   .then((data) => console.log(data))
   .catch((err) => console.log(err))
   
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
