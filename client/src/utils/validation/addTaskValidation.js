import * as Yup from 'yup';

const validationAddTaskSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  projectid: Yup.number().required('Project is required'),
  status: Yup.string().required('Status is required'),
  priority: Yup.string().required('Priority is required'),
  enddate: Yup.date().required('Start date is required'),
  sectionid: Yup.number().required('Section is required'),
});

export default validationAddTaskSchema;
