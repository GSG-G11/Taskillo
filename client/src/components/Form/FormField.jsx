import { Field } from 'formik';
const FormField = ({placeholder, name, ...rest}) =>{
  return (
    <Field 
    id={name}
    name={name}
    {...rest}
    placeholder={placeholder}
    className='form-control'
    />
  )

};

export default FormField;