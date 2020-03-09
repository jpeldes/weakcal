// Imports
import {
  receiveHolidays,
  markMonthSynced,
  hasSyncedMonth,
  isSyncingMonth,
  startedSyncingMonth,
  finishedSyncingMonth
} from "./features/holidays/holidaysSlice";
import { store } from "./store";

// Constants
const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

// Helpers
const jsonPost = (url, data) => {
  return fetch(BASE_URL + url, {
    method: "POST",
    body: JSON.stringify({ apiKey: API_KEY, ...data })
  }).then(resp => resp.json());
};

// Functions
export const syncHolidays = (startDate, endDate) => {
  let data = {
    startDate: startDate,
    endDate: endDate
  };

  let url = "/api/holidays";
  return jsonPost(url, data).then(json => {
    store.dispatch(receiveHolidays({ holidays: json.holidays }));
    return json;
  });
};

export const syncMonthHolidays = theMoment => {
  let theMonth = theMoment.format("YYYY-MM");

  // Detect if syncing in progress
  if (isSyncingMonth(theMonth)(store.getState())) {
    console.log(theMonth + " is already being synced");
    return Promise.resolve();
  }

  // Detect if already synced and is in store
  if (hasSyncedMonth(theMonth)(store.getState())) {
    console.log(theMonth + " has been synced before");
    return Promise.resolve();
  }

  let startDate = theMoment.startOf("month").format("YYYY-MM-DD");
  let endDate = theMoment.endOf("month").format("YYYY-MM-DD");

  // Mark as being synced
  store.dispatch(startedSyncingMonth({ syncingMonth: theMonth }));

  return syncHolidays(startDate, endDate)
    .then(json => {
      store.dispatch(markMonthSynced({ syncedMonth: theMonth }));
    })
    .finally(() => {
      store.dispatch(finishedSyncingMonth({ syncingMonth: theMonth }));
    });
};
