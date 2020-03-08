import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'settings',
  initialState: {
    isDarkMode: true,
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.isDarkMode = !!action.payload.isDarkMode;
    },
  },
});

// Selectors
export const selectDarkMode = state => !!state.settings.isDarkMode;

// Actions
export const { setDarkMode } = slice.actions;

export default slice.reducer;
