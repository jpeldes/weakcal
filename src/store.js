import { configureStore, combineReducers } from "@reduxjs/toolkit";
import holidaysReducer from "./features/holidays/holidaysSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Combine reducers
const reducers = combineReducers({
  holidays: holidaysReducer
});

// Persist
const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

// Export
let store = configureStore({ reducer: persistedReducer });
let persistor = persistStore(store);

export { store, persistor };
