// імпортуємо бібліотеку createSlice
import { createSlice } from '@reduxjs/toolkit';

//  створюємо Slice для filter
// початковий стан ''
// ред'юсер з перезаписом фільтра
export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    editFilter(state, action) {
      return action.payload;
    },
  },
});

//  експорти наших екшенів
export const { editFilter } = filterSlice.actions;
