import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./commonSlice";

const combinedReducer = {
  common: commonSlice,
};

const store = configureStore(
  {
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  }
  // composeWithDevTools()
);
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
export default store;
