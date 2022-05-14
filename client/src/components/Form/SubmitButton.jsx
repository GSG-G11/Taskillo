import { useFormikContext } from 'formik';

const SubmitButton = ({ title, className }) => {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <div className={`form-group ${className}`}>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!isValid}
        className="btn btn-primary form-control"
      >
        {title}
      </button>
    </div>
  );
};

export default SubmitButton;
