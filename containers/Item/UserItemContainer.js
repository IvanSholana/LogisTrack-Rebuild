import { useState } from "react";
import ItemAppBarContainer from "./ItemAppBar";
import UserItemComponent from "../../components/Item/UserItemComponent";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CheckBoxComponent from "../../components/CheckBox/CheckBoxComponent";
import roomList from "../../data/local/RoomData";
import { setReservation } from "../../redux/ReservationSlice";

const UserItemContainer = () => {
  const [activeScreen, setActiveScreen] = useState("Peralatan");
  const itemsdata = useSelector((state) => state.reservation.itemsreservation);
  const dispatch = useDispatch();

  const updateData = (nama, newValue) => {
    const updatedItemsData = itemsdata.map((item) => {
      if (item.nama === nama) {
        return { ...item, jumlah: newValue };
      }
      return item;
    });

    console.log(updatedItemsData);
    dispatch(setReservation({ itemsreservation: updatedItemsData }));
  };

  return (
    <>
      <ItemAppBarContainer
        content={"Peminjaman"}
        shownScreen={setActiveScreen}
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
            renderItem={({ item }) => <CheckBoxComponent data={item} />}
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
