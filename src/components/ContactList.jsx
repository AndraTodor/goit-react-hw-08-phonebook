import { useDispatch, useSelector } from 'react-redux';
import Contact from './Contact';

import { deleteContact } from '../redux/contacts/operations';
import { selectFilteredContacts } from '../redux/contacts/selectors';
import toast, { Toaster } from 'react-hot-toast';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length === 0) {
    return;
  }
  return (
    <>
      <ul className="space-y-3">
        {filteredContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            phone={number}
            deleteContacts={contactId => {
              dispatch(deleteContact(contactId))
                .unwrap()
                .then(() => toast.success('Contact deleted successfully!'));
            }}
          />
        ))}
      </ul>
      <Toaster />
    </>
  );
};

export default ContactList;
