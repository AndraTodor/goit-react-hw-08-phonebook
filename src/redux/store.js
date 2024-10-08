import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
    filter: (state = '', action) => {
      if (action.type === 'contacts/setFilter') {
        return action.payload;
      }
      return state;
    },
  },
});

export { store };
