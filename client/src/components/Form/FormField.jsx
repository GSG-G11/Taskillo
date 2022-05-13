import React from 'react';
import { Field } from 'formik';

const FormField = ({
  type,
  name,
  placeholder,
  onChange,
  value,
  onBlur,
  errors,
  visited,
  classname,
}) => {
  return (
    <div className="form-group">
      <Field
        name={name}
        className={classname}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {errors[name] && visited[name] && (
        <div className="invalid-feedback">{errors[name]}</div>
      )}
    </div>
  );
};

export default FormField;
