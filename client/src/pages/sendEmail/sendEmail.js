import axios from 'axios';
import { Form, FormField, SubmitButton, Text, Title } from '../../components';
import validationSchema from '../../utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const SendEmail = () => {
  const handleSubmit = async (userInfo) => {
    try {
      const { data } = await axios.post('/api/v1/user/sendEmail', userInfo);
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
    <section className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <div className="send-email d-flex flex-column justify-content-center align-items-center rounded-3 p-5 gap-1">
        <Title text="Sign up for you Email!" className="title fw-bold pb-2 fs-3" />
        <Form
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <FormField name="email" type="email" placeholder="Enter your Email" className='w-100'/>
          <Text
            text="By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy.          "
            className="text-justify signup-text w-100 pt-2 pb-2 lh-sm"/>
          <SubmitButton title="Send Email" className="btn-submit rounded w-100" />
        </Form>
      </div>
    </section>
  );
};

export default SendEmail;
