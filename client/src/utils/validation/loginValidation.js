import * as Yup from 'yup';

const validationLoginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('email is required'),
  password: Yup.string()
    .required('password is required')
    .min('8', 'password must be at least 8 characters'),
});

export default validationLoginSchema;
