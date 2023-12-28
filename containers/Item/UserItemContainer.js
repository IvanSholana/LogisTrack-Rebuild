import { useState } from "react";
import ItemAppBarContainer from "./ItemAppBar";
import UserItemComponent from "../../components/Item/UserItemComponent";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CheckBoxComponent from "../../components/CheckBox/CheckBoxComponent";
import roomList from "../../data/local/RoomData";
import { setReservation } from "../../redux/ReservationSlice";

const UserItemContainer = ({ navigation }) => {
  const [activeScreen, setActiveScreen] = useState("Peralatan");
  const { itemsreservation: itemsdata, roomsreservation: itemsroom } =
    useSelector((state) => state.reservation);

  const dispatch = useDispatch();

  const updateData = (nama, newValue) => {
    const updatedItemsData = itemsdata.map((item) => {
      if (item.nama === nama) {
        return { ...item, jumlah: newValue };
      }
      return item;
    });

    dispatch(
      setReservation({
        itemsreservation: updatedItemsData,
        roomsreservation: itemsroom,
      })
    );
  };

  const addRoom = (selectedRoom, isSelected) => {
    let updatedRooms = [...itemsroom];

    if (isSelected && !updatedRooms.includes(selectedRoom)) {
      updatedRooms.push(selectedRoom);
    } else {
      updatedRooms = updatedRooms.filter((room) => room !== selectedRoom);
    }

    dispatch(
      setReservation({
        itemsreservation: itemsdata,
        roomsreservation: updatedRooms,
      })
    );
  };

  return (
    <>
      <ItemAppBarContainer
        content={"Inventory"}
        shownScreen={setActiveScreen}
        navigation={navigation}
      />
      <View style={styles.itemSection}>
        {activeScreen == "Peralatan" ? (
          <FlatList
            data={itemsdata}
            renderItem={({ item }) => (
              <UserItemComponent data={item} addItem={updateData} />
            )}
            keyExtractor={(item) => item.nama}
          />
        ) : (
          <FlatList
            data={roomList}
            renderItem={({ item }) => (
              <CheckBoxComponent
                data={item}
                setValue={addRoom}
                isChecked={itemsroom.includes(item.nama)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  itemSection: { flex: 1 },
});

export default UserItemContainer;
