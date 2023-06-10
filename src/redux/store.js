// піключення бібілоеки конфігурації стора @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// підключення логгера
import logger from 'redux-logger';

// підключення slice для нашого стору
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';

// створення store.
// містить стейти contacts і filter
// middleware - для логгера консолі
export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
