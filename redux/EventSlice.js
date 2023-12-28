import { createSlice } from "@reduxjs/toolkit";
import peminjamanList from "../data/local/ReservationData";

const initialState = {
  event: peminjamanList.map((e) => e.toSerializableObject()),
};

export const EventSlice = createSlice({
  name: "event",
  initialState: initialState,
  reducers: {
    setEvent: (state, action) => {
      state.event = action.payload.event;
    },
  },
});

export const { setEvent } = EventSlice.actions;

export default EventSlice.reducer;
