// імпортуємо бібліотеку createSlice
import { createSlice } from '@reduxjs/toolkit';

//contacts витягаємо з localStorage і парсимо
// якщо нічого нема і приходить null то присвоюємо []
const initialState = JSON.parse(localStorage.getItem('contacts')) ?? [];

//  створюємо Slice для contacts
// початковий стан
// ред'юсери з двома екшенами додавання і видалення контакту і перезаписом localStorage

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
      //   state.push(action.payload);
      //   localStorage.setItem('contacts', JSON.stringify(state));
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
      //   localStorage.setItem('contacts', JSON.stringify(state));
    },
  },
});

//  експорти наших екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
