import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'holidays',
  initialState: {
    byId: {},
    syncedMonths: []
  },
  reducers: {
    receiveHolidays: (state, action) => {
      let holidays = action.payload.holidays || {};

      for (var holidayId in holidays) {
        state.byId[holidayId] = holidays[holidayId];
      }
    },
    markMonthSynced: (state, action) => {
      let syncedMonth = action.payload.syncedMonth;
      if (state.syncedMonths.indexOf(syncedMonth) === -1) {
        state.syncedMonths.push(syncedMonth);
      }
    }
  },
});

// Selectors
export const selectAllHolidays = state => state.holidays.byId;
export const selectHolidayById = holidayId => state => state.holidays.byId[holidayId];
export const hasSyncedMonth = syncedMonth => state => state.holidays.syncedMonths.indexOf(syncedMonth) >= 0;

// Actions
export const { receiveHolidays, markMonthSynced } = slice.actions;

export default slice.reducer;
