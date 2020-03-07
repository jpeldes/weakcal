import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'holidays',
  initialState: {
    byId: {},
  },
  reducers: {
    receiveHolidays: (state, action) => {
      let holidays = action.payload.holidays || {};

      for (var holidayId in holidays) {
        state.byId[holidayId] = holidays[holidayId];
      }
    },
  },
});

// Selectors
export const selectAllHolidays = state => state.holidays.byId;
export const selectHolidayById = holidayId => state => state.holidays.byId[holidayId];

// Actions
export const { receiveHolidays } = slice.actions;

export default slice.reducer;
