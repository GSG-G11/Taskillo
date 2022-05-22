import { FormField, SubmitButton, Form } from '../Form';

const TaskForm = ({ handleSubmit, taskFilter }) => {
  return (
    <Form initialValues={{ name: taskFilter[0].name }} onSubmit={handleSubmit}>

      <label>Task Name</label>
      <FormField
        type='text'
        name='name'
        placeholder='enter the task'
        className='mb-4'
      />

      <label>Project Name</label>
      <FormField type='text' name='project name' className='mb-4' />

      <label> priority </label>
      <FormField as='select' name='priority'>
        <option value='low'>low</option>
        <option value='high'>high</option>
        <option value='Mid'>Mid</option>
      </FormField>

      <label> status </label>
      <FormField as='select' name='status'>
        <option value='low'>low</option>
        <option value='high'>high</option>
        <option value='Mid'>Mid</option>
      </FormField>
      
      <label>enddate</label>
      <FormField type='date' name='enddate' className='mb-4' />

      <SubmitButton
        title='Sign Up'
        className='btn btn-primary btn-submit mb-3'
      />
    </Form>
  );
};

export default TaskForm;
