import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../redux/contactsSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const {
    items: contacts,
    isLoading,
    error,
  } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.contacts.filter);

  // Fetch the contacts when the component mounts
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Handle deleting a contact
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  // Handle filtering contacts based on user input
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-teal-600 dark:text-teal-400">
          Contact Book
        </h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ContactForm />
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
            Contacts
          </h2>
          <Filter />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={handleDeleteContact}
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
