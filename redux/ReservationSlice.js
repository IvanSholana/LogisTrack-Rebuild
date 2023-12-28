import { createSlice } from "@reduxjs/toolkit";
import itemList from "../data/local/ItemData";
import ReservationItem from "../domain/models/ReservationItem";

const initialState = {
  itemsreservation: itemList.map((e) => ({ nama: e.nama, jumlah: 0 })),
  roomsreservation: [],
};

export const ReservationSlice = createSlice({
  name: "itemNroom",
  initialState: initialState,
  reducers: {
    setItemNRoom: (state, action) => {
      state.itemsdata = action.payload.itemsreservation;
      state.roomsdata = action.payload.roomsreservation;
    },
  },
});

export const { setReservation } = ReservationSlice.actions;

export default ReservationSlice.reducer;
