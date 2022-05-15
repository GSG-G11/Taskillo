import { useFormikContext } from "formik";

export const SubmitButton = ({ title, className }) => {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <button
      type="submit"
      onClick={handleSubmit}
      disabled={!isValid}
      className={className}
    >
      {title}
    </button>
  );
};
