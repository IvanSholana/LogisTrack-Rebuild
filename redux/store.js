import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./loginSlice";
import RegisterReducer from "./registerSlice";

const store = configureStore({
  reducer: {
    login: LoginReducer,
    register: RegisterReducer,
  },
});

export default store;
