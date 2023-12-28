import { createSlice } from "@reduxjs/toolkit";
import usersdata from "../data/local/UserData";

const initialState = {
  datauser: usersdata.map((e) => e.toSerializableObject()),
};

export const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    setRegister: (state, action) => {
      state.datauser = action.payload.datauser;
    },
  },
});

export const { setRegister } = registerSlice.actions;

export default registerSlice.reducer;
