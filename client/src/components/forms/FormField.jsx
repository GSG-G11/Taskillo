import { Field, ErrorMessage } from "formik";
import { TextError } from "./TextError";

const FormField = ({ placeholder, name, ...rest }) => {
  return (
    <div className="form-label-group">
      <Field
        id={name}
        name={name}
        {...rest}
        placeholder={placeholder}
        className="form-control"
      />
      <label htmlFor={name}>{placeholder}</label>{" "}
      <ErrorMessage
        name={name}
        component={TextError}
        className="error-message"
      />
    </div>
  );
};

export { FormField };
