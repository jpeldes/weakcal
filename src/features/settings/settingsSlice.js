import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import * as utils from '../../utils';

export const slice = createSlice({
  name: 'settings',
  initialState: {
    isDarkMode: true,
    firstDayOfWeek: moment.localeData().firstDayOfWeek(),
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.isDarkMode = !!action.payload.isDarkMode;
    },
    setFirstDayOfWeek: (state, action) => {
      utils.updateMomentJsLocale({ dow: action.payload.firstDayOfWeek });
      state.firstDayOfWeek = action.payload.firstDayOfWeek;
    },
  },
});

// Selectors
export const selectDarkMode = state => !!state.settings.isDarkMode;
export const selectFirstDayOfWeek = state => state.settings.firstDayOfWeek;

// Actions
export const { setDarkMode, setFirstDayOfWeek } = slice.actions;

export default slice.reducer;
