import * as Yup from "yup";

const validationLoginSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("email is required"),
  password: Yup.string().min(8, 'length must be at least 8 characters').required('password is required')
});

export default validationLoginSchema;