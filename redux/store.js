import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginSlice";
import RegisterReducer from "./RegisterSlice";
import ItemRoomReducer from "./ItemRoomSlice";
import ReservationReducer from "./ReservationSlice";
import EventReducer from "./EventSlice";

const store = configureStore({
  reducer: {
    login: LoginReducer,
    register: RegisterReducer,
    itemNroom: ItemRoomReducer,
    reservation: ReservationReducer,
    event: EventReducer,
  },
});

export default store;
