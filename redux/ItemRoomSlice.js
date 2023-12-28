import { createSlice } from "@reduxjs/toolkit";
import itemList from "../data/local/ItemData";
import roomList from "../data/local/RoomData";

const initialState = {
  itemsdata: itemList,
  roomsdata: roomList,
};

export const ItemRoomSlice = createSlice({
  name: "itemNroom",
  initialState: initialState,
  reducers: {
    setItemNRoom: (state, action) => {
      state.name = action.payload.name;
      state.itemsdata = action.payload.itemsdata;
      state.roomsdata = action.payload.roomsdata;
    },
  },
});

export const { setRoom } = ItemRoomSlice.actions;

export default ItemRoomSlice.reducer;
