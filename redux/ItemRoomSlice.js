import { createSlice } from "@reduxjs/toolkit";
import itemList from "../data/local/ItemData";
import roomList from "../data/local/RoomData";

const initialState = {
  itemsdata: itemList.map((e) => e.toSerializableObject()),
  roomsdata: roomList.map((e) => e.toSerializableObject()),
};

export const ItemRoomSlice = createSlice({
  name: "itemNroom",
  initialState: initialState,
  reducers: {
    setItemNRoom: (state, action) => {
      state.itemsdata = action.payload.itemsdata;
      state.roomsdata = action.payload.roomsdata;
    },
  },
});

export const { setItemRoom } = ItemRoomSlice.actions;

export default ItemRoomSlice.reducer;
