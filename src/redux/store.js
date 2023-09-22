import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";

const store = configureStore({
  reducer: {
    userSlice: userSlice,
  },
});
export default store;
