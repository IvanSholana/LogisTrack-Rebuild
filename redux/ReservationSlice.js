import { createSlice } from "@reduxjs/toolkit";
import itemList from "../data/local/ItemData";

const initialState = {
  itemsreservation: itemList.map((e) => ({ nama: e.nama, jumlah: 0 })),
  roomsreservation: [],
};

export const ReservationSlice = createSlice({
  name: "itemNroom",
  initialState: initialState,
  reducers: {
    setReservation: (state, action) => {
      state.itemsreservation = action.payload.itemsreservation;
      state.roomsreservation = action.payload.roomsreservation;
    },
  },
});

export const { setReservation } = ReservationSlice.actions;

export default ReservationSlice.reducer;
  