// configureStore.js

import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import lumberjackReducer from "../features/lumberjack/lumberjackSlice";
import chainsawReducer from "../features/chainsaw/chainsawSlice";
import loggingTruckReducer from "../features/loggingTruck/loggingTruckSlice";
import tunguskaReducer from "../features/tunguska/tunguskaSlice";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  lumberjack: lumberjackReducer,
  chainsaw: chainsawReducer,
  loggingTruck: loggingTruckReducer,
  tunguska: tunguskaReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
