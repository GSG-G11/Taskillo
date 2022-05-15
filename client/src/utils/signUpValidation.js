import * as Yup from 'yup';
const validationSignUpSchema = Yup.object({
  username:Yup.string().min(3,'Username should be at least 3 char ').max(20,'Username should be at most 20 char ').required('username is required'),
  password: Yup.string().min(8, 'Password should be at least 8 char').required('Password is required'),
  code:Yup.number().min(5).required('Code is required')

});

export default validationSignUpSchema;