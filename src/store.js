import { configureStore, combineReducers } from "@reduxjs/toolkit";
import holidaysReducer from "./features/holidays/holidaysSlice";
import settingsReducer from "./features/settings/settingsSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import thunk from "redux-thunk";

// Combine reducers
const reducers = combineReducers({
  holidays: holidaysReducer,
  settings: settingsReducer
});

// Persist
const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

// Export
let store = configureStore({ reducer: persistedReducer, middleware: [thunk] });
let persistor = persistStore(store);

export { store, persistor };
