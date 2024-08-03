import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import statusInfoSlices from "./features/statusinfo/statusInfoSlices";
import storage from "redux-persist/lib/storage";

const statusInfoPersistConfig = {
  key: "statusInfo",
  storage,
};

const persistedStatusInfoReducer = persistReducer(
  statusInfoPersistConfig,
  statusInfoSlices
);

const store = configureStore({
  reducer: {
    statusInfo: persistedStatusInfoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
