import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginSlice";
import RegisterReducer from "./RegisterSlice";
import ItemRoomReducer from "./ItemRoomSlice";

const store = configureStore({
  reducer: {
    login: LoginReducer,
    register: RegisterReducer,
    itemNRoom: ItemRoomReducer,
  },
});

export default store;
