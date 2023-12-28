import { useState } from "react";
import ItemAppBarContainer from "./ItemAppBar";
import UserItemComponent from "../../components/Item/UserItemComponent";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import CheckBoxComponent from "../../components/CheckBox/CheckBoxComponent";

const UserItemContainer = () => {
  const [activeScreen, setActiveScreen] = useState("Peralatan");
  const itemsdata = useSelector((state) => state.reservation.itemsreservation);
  const roomsdata = useSelector((state) => state.itemNroom.roomsdata);

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
            renderItem={({ item }) => <UserItemComponent data={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            data={roomsdata}
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
