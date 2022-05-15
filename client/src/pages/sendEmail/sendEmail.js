import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Form,
  FormField,
  SubmitButton,
  Text,
  Logo,
  Image,
} from '../../components';
import { validationSchema } from '../../utils';
import sendemail from '../../images/sendemail.svg';
import './style.css';

const SendEmail = () => {
  const navigate = useNavigate();
  const handleSubmit = async (userInfo) => {
    try {
      const { data } = await axios.post('/api/v1/user/sendEmail', userInfo);
      if (data.message === 'Email sent successfully') {
        navigate('/signup');
      } else {
        // Alert error
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='d-flex'>
      <div className='col-6 container d-flex flex-column m-auto'>
        <div className='d-flex flex-row justify-content-left w-50 m-auto'>
          <Logo />
          <Text text='Taskillo' className='fs-5 text-white fw-bold' />
        </div>
        <div className='form-side d-flex flex-column m-auto'>
          <Text text='Start For Free' className='fs-5 text-white mb-2 mt-5' />
          <Text text='Verify your email' className='fs-2 text-white mb-4' />
          <Form
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <FormField
              name='email'
              type='email'
              placeholder='Enter your Email'
              className='text-white shadow-lg input '
            />
            <Text
              text="By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy.          "
              className='text-justify confirm-text lh-sm text-white mt-3 mb-3'
            />
            <SubmitButton
              title='Send Code'
              className='btn-primary btn-submit rounded mb-3 p-2'
            />
          </Form>
        </div>
      </div>
      <div className='col-6 w-50 vh-100 text-center test d-flex justify-content-center align-items-center'>
        <Image
          alt='sendemail-img'
          src={sendemail}
          className='img-fluid mx-auto w-50 '
        />
      </div>
    </div>
  );
};

export default SendEmail;
