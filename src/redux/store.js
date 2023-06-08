// піключення біббілоеки конфігурації стора
import { configureStore } from '@reduxjs/toolkit';

import { createReducer, createAction } from '@reduxjs/toolkit';

// створення store.
// містить стейти contacts і filter
const store = configureStore({
  reducer: {
    contacts: [],
    filter: '',
  },
});
