import { FormField, SubmitButton, Form } from '../Form';

const TaskForm = ({ handleSubmit, taskFilter }) => {
  return (
    <Form initialValues={{ name: taskFilter[0].name, projectname:taskFilter[0].projectname,priority:taskFilter[0].priority,status:taskFilter[0].status,enddate:taskFilter[0].endate }} onSubmit={handleSubmit}>

      <label>Task Name</label>
      <FormField
        type='text'
        name='name'
        placeholder='enter the task'
        className='mb-4'
      />

      <label>Project Name</label>
      <FormField type='text' name='projectname' className='mb-4' />

      <label> priority </label>
      <FormField as='select' name='priority'>
        <option value='Low'>Low</option>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
      </FormField>

      <label> status </label>
      <FormField as='select' name='status'>
        <option value='To Do'>To Do</option>
        <option value='In Progress'>In Progress</option>
        <option value='Done'>Done</option>
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
