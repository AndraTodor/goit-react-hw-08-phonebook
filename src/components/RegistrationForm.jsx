import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/auth/operations';
import { selectAuthError } from '../redux/auth/selectors';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const RegisterFormValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required!')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    email: Yup.string().email('Invalid email').required('Email is required!'),
    password: Yup.string()
      .required('Password is required!')
      .min(8, 'Password must contain at least 8 characters')
      .max(100, 'Password must be less than 100 characters'),
  });
  const handleFormSubmit = value => {
    console.log('Form data:', value); // Afișează datele trimise către server
    dispatch(register(value));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={RegisterFormValidationSchema}
    >
      <Form className="space-y-6 bg-white p-6 shadow-md rounded-lg">
        <label className="block">
          <span className="block mb-1 text-gray-600">Enter your name</span>
          <Field
            type="text"
            name="name"
            placeholder="Simon"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <ErrorMessage
            name="name"
            component="span"
            className="text-red-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="block mb-1 text-gray-600">Email</span>
          <Field
            type="text"
            name="email"
            placeholder="test.example@gmail.com"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <ErrorMessage
            name="email"
            component="span"
            className="text-red-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="block mb-1 text-gray-600">Password</span>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <ErrorMessage
            name="password"
            component="span"
            className="text-red-500 text-sm"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Sign Up
        </button>

        {error && (
          <p className="text-red-500 mt-3">
            Oops, some error occurred... {error}
          </p>
        )}
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
