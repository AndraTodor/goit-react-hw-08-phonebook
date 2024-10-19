import { Field, Form, Formik, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contacts/operations';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = newContact => {
    dispatch(addContact(newContact))
      .unwrap()
      .then(() => {
        toast.success('Contact added successfully!');
      });
  };

  const initialValues = { name: '', number: '' };
  const nameFieldId = useId();
  const numberFieldId = useId();
  const addContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
    number: Yup.number()
      .min(7, 'Too Short!')
      .required('Required!')
      .typeError('Enter phone-number!'),
  });

  const handleFormSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={addContactSchema}
    >
      <Form className="space-y-6 bg-white p-6 shadow-md rounded-lg">
        <div>
          <label htmlFor={nameFieldId} className="block mb-1 text-gray-600">
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <ErrorMessage
            name="name"
            component="span"
            className="text-red-500 text-sm"
          />
        </div>
        <div>
          <label htmlFor={numberFieldId} className="block mb-1 text-gray-600">
            Phone
          </label>
          <Field
            type="tel"
            name="number"
            id={numberFieldId}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <ErrorMessage
            name="number"
            component="span"
            className="text-red-500 text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
