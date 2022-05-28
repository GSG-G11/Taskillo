import * as Yup from "yup";

const addProjectValidationSchema = Yup.object({
  name: Yup.string().min(4, 'length must be more than 3 characters').max(20, 'length must be at most 20 characters').required("name is required"),
  description: Yup.string().required('description is required')
});

export default addProjectValidationSchema;
