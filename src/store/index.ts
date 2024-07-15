import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //
import modeReducer from "./mode";

const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  mode: modeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Custom middleware for handling persistence
const persistenceMiddleware: Middleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    localStorage.setItem("reduxState", JSON.stringify(getState()));
    return result;
  };

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistenceMiddleware),
  devTools: true,
});


persistStore(store);


export type AppState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;


export default store;

