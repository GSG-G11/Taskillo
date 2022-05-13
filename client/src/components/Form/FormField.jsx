import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';
const FormField = ({placeholder, name, ...rest}) =>{
  return (
    <div className='form-group'>
    <Field 
    id={name}
    name={name}
    {...rest}
    placeholder={placeholder}
    className='form-control'
    />
    <ErrorMessage 
      name={name}
      component={TextError}
      className='error-massage'
    />
    </div>


  )

};

export default FormField;