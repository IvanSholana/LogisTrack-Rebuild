import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  status: "",
  nimNidn: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    setLogin: (state, action) => {
      state.name = action.payload.name;
      state.status = action.payload.status;
      state.nimNidn = action.payload.nimNidn;
    },
  },
});

export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;
