import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
