import { useFormikContext } from "formik";

export const SubmitButton = ({ title, role }) => {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <button
      type="submit"
      onClick={handleSubmit}
      disabled={!isValid}
      className={`btn btn-${role} w-25 align-self-center` }
    >
      {title}
    </button>
  );
};
