import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsReducer';
import filter from './filterReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter,
  },
});

export default store;