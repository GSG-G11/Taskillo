import axios from 'axios';
import { Form, FormField, SubmitButton } from '../components';
import validationSchema from '../utils';

const SendEmail = () => {
  const handleSubmit = async (userInfo) => {
    try {
      const { data } = await axios.post('/api/v1/user/sendEmail', userInfo);
      console.log(data);
      if (data.message === 'Email sent successfully') {
        console.log('Email sent successfully');
      } else {
        console.log('Email not sent');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Form
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <FormField name="email" type="email" placeholder="Enter your Email" />
        <SubmitButton title="Send Email" />
      </Form>
    </div>
  );
};

export default SendEmail;
