import { useState } from "react";
import ItemAppBarContainer from "./ItemAppBar";
import { View } from "@gluestack-ui/themed";
import AddItemComponent from "../../components/Item/AdminItemComponent";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import { setItemRoom } from "../../redux/ItemRoomSlice";

const AdminItemContainer = ({ navigation }) => {
  const [activeScreen, setActiveScreen] = useState("Peralatan");
  const { itemsdata, roomsdata } = useSelector((state) => state.itemNroom); // GET FROM ITEM AND ROOM DB

  const dispatch = useDispatch();

  const deleteInventoryHandling = (item) => {
    if (activeScreen == "Peralatan") {
      const newdata = itemsdata.filter((e) => e.nama !== item);
      dispatch(setItemRoom({ itemsdata: newdata, roomsdata: roomsdata })); // POST TO ITEM DB
    } else {
      const newdata = roomsdata.filter((e) => e.nama !== item);
      dispatch(setItemRoom({ itemsdata: itemsdata, roomsdata: newdata })); // POST TO ROOM DB
    }
  };

  return (
    <>
      <ItemAppBarContainer
        content={"Atur Inventaris"}
        shownScreen={setActiveScreen}
      />
      <View style={{ paddingTop: 10 }}>
        <ButtonComponent
          buttontext={"Tambah Inventaris"}
          buttonstyle={{ backgroundColor: colors.buttonLogin, margin: 10 }}
          onPress={() => navigation.navigate("AddItem", { role: activeScreen })}
        />
        {activeScreen == "Peralatan" ? (
          <FlatList
            data={itemsdata}
            renderItem={({ item }) => (
              <AddItemComponent
                navigation={navigation}
                item={item}
                deletehandling={deleteInventoryHandling}
                onPress={() =>
                  navigation.navigate("AdminEdit", {
                    data: item,
                    screen: "Peralatan",
                  })
                }
              />
            )}
            keyExtractor={(item) => item.nama}
          />
        ) : (
          <FlatList
            data={roomsdata}
            renderItem={({ item }) => (
              <AddItemComponent
                deletehandling={deleteInventoryHandling}
                navigation={navigation}
                item={item}
                onPress={() =>
                  navigation.navigate("AdminEdit", {
                    data: item,
                    screen: "Ruangan",
                  })
                }
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </>
  );
};

export default AdminItemContainer;
