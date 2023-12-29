import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startDate: "",
  endDate: "",
};

export const DateSlice = createSlice({
  name: "date",
  initialState: initialState,
  reducers: {
    setDate: (state, action) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
});

export const { setDate } = DateSlice.actions;

export default DateSlice.reducer;
