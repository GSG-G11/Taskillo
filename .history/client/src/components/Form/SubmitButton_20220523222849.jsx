import { useFormikContext } from 'formik';

const SubmitButton = ({ title, className }) => {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <div className='submit-div'>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!isValid}
        className={className}
      >
        {title}
      </button>
    </div>
  );
};

export default SubmitButton;
