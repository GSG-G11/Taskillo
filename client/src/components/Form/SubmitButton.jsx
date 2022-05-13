import { useFormikContext } from 'formik';

const SubmitButton = ({ title }) => {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <div className="form-group">
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!isValid}
        className="btn btn-primary"
      >
        {title}
      </button>
    </div>
  );
};

export default SubmitButton;
