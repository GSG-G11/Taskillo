import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';

const FormField = ({ placeholder, name, className, ...rest }) => {
  return (
    <div className={`form-group ${className}`}>
      <Field
        id={name}
        name={name}
        {...rest}
        placeholder={placeholder}
        className="form-control input"
      />
      <ErrorMessage
        name={name}
        component={TextError}
        className="error-message"
      />
    </div>
  );
};

export default FormField;
