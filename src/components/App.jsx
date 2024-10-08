import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Contacts from './Contacts';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <UserMenu />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/contacts"
          element={isAuthenticated ? <Contacts /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
//   setFilter,
// } from '../redux/contactsSlice';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';

// const App = () => {
//   const {
//     items: contacts,
//     isLoading,
//     error,
//   } = useSelector(state => state.contacts);
//   const filter = useSelector(state => state.contacts.filter);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Fetch contacts on mount
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const handleAddContact = (name, number) => {
//     const contactExists = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (contactExists) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     dispatch(addContact({ name, number }));
//   };

//   const handleDeleteContact = contactId => {
//     dispatch(deleteContact(contactId));
//   };

//   const handleChangeFilter = event => {
//     dispatch(setFilter(event.target.value));
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const visibleContacts = getVisibleContacts();

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
//         <h1 className="text-4xl font-bold text-center text-teal-600">
//           Phonebook
//         </h1>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>Error: {error}</p>}
//         <ContactForm onSubmit={handleAddContact} />
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//             Contacts
//           </h2>
//           <Filter value={filter} onChange={handleChangeFilter} />
//           <ContactList
//             contacts={visibleContacts}
//             onDeleteContact={handleDeleteContact}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
