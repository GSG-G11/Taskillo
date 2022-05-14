import { useFormikContext } from "formik";

export const SubmitButton = ({ title }) => {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <button
      type="submit"
      onClick={handleSubmit}
      disabled={!isValid}
      className='submit-btn'
    >
      {title}
    </button>
  );
};
