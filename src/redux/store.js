// піключення бібілоеки конфігурації стора @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// підключення логгера (для виводу в консолі попереднього стану стора, екшена, і наступного стану стора)
import logger from 'redux-logger';

// підключення slice для нашого фільтра (а потім и з нього витягаємо редʼюсер коли вказуємо в store)
import { filterSlice } from './filter/filterSlice';

// підключення уже готового редʼюсера контактів прогнаного через persist (для зберігання в localStorage)
import { persistedContactsReducer } from '../redux/contacts/contactsSlice';

// підключення persist для роботи з localstorage для Gate в index.js
import { persistStore } from 'redux-persist';

// створення store.
// містить стейт-редюсер contacts (прогнаний через persist) і filter
// middleware - для логгера консолі
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

// експортуємо персістор, а його підключаємо в індекс файлі і огортаємо в компоненті PersistGate
export const persistor = persistStore(store);
