import { createSlice } from '@reduxjs/toolkit';

const EMPTY_ARRAY = [];

export const slice = createSlice({
  name: 'holidays',
  initialState: {
    byId: {},
    syncedMonths: [],
    syncingMonths: []
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
    },

    startedSyncingMonth: (state, action) => {
      let syncingMonth = action.payload.syncingMonth;
      if (state.syncingMonths.indexOf(syncingMonth) === -1) {
        state.syncingMonths.push(syncingMonth);
      }
    },
    finishedSyncingMonth: (state, action) => {
      let syncingMonth = action.payload.syncingMonth;
      let index = state.syncingMonths.indexOf(syncingMonth);

      if (index > -1) {
        state.syncingMonths.splice(index, 1);
      }
    },
  },
});

// Selectors
export const selectAllHolidays = state => state.holidays.byId;
export const selectHolidayById = holidayId => state => state.holidays.byId[holidayId] || EMPTY_ARRAY;
export const hasSyncedMonth = syncedMonth => state => state.holidays.syncedMonths.indexOf(syncedMonth) >= 0;
export const isSyncingMonth = syncingMonth => state => state.holidays.syncingMonths.indexOf(syncingMonth) >= 0;

// Actions
export const {
  receiveHolidays,
  markMonthSynced,
  startedSyncingMonth,
  finishedSyncingMonth
} = slice.actions;

export default slice.reducer;
