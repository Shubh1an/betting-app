import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./commonSlice";

const combinedReducer = {
  common: commonSlice,
};

export default configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
},
  // composeWithDevTools()
);
