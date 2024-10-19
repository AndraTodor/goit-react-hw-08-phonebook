import { ImPhone, ImUser } from 'react-icons/im';
const Contact = ({ name, phone, deleteContacts, id }) => {
  return (
    <li className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-3">
      <div className="flex space-x-4 items-center">
        <ImUser className="text-gray-500" size="24" />
        <p className="font-medium">{name}</p>
      </div>
      <div className="flex space-x-4 items-center">
        <ImPhone className="text-gray-500" size="20" />
        <p>{phone}</p>
      </div>
      <button
        type="button"
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        onClick={() => deleteContacts(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
