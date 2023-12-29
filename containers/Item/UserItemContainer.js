import { useState } from "react";
import ItemAppBarContainer from "./ItemAppBar";
import UserItemComponent from "../../components/Item/UserItemComponent";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CheckBoxComponent from "../../components/CheckBox/CheckBoxComponent";
import roomList from "../../data/local/RoomData";
import { setReservation } from "../../redux/ReservationSlice";
import FloatingButtonComponent from "../../components/FloatingButton/FloatingButtonComponent";
import DatePickers from "../../components/DatePicker/DatePickerComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";

const UserItemContainer = ({ navigation, route }) => {
  const [activeScreen, setActiveScreen] = useState("Peralatan");
  const { itemsreservation: itemsdata, roomsreservation: itemsroom } =
    useSelector((state) => state.reservation);
  const allitem = useSelector((state) => state.itemNroom.itemsdata);
  const allroom = useSelector((state) => state.itemNroom.roomsdata);

  const currentDate = new Date();
  const formattedDate = currentDate
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);
  const [isStartDate, setIsStartDate] = useState(true);
  const [startDate, setStartDate] = useState(formattedDate);
  const [endDate, setEndDate] = useState(formattedDate);

  const CalendarHandling = (date) => {
    if (isStartDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

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
        data={[startDate, endDate]}
        route={route}
      />
      <View style={styles.itemSection}>
        {activeScreen == "Peralatan" ? (
          <FlatList
            data={itemsdata}
            renderItem={({ item }) => (
              <UserItemComponent
                data={item}
                addItem={updateData}
                onPress={() =>
                  navigation.navigate("DetailItem", {
                    data: allitem.find((e) => e.nama == item.nama),
                  })
                }
              />
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
                onPress={() =>
                  navigation.navigate("DetailRoom", {
                    data: allroom.find((e) => e.nama == item.nama),
                  })
                }
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
      <DatePickers
        setValue={CalendarHandling}
        isVisible={isVisible}
        setVisible={setVisible}
        content={
          isStartDate ? "Tanggal Awal Peminjaman" : "Tanggal Akhir Peminjaman"
        }
        item={
          <ButtonComponent
            onPress={() => setIsStartDate(!isStartDate)}
            buttonstyle={{ backgroundColor: colors.buttonLogin }}
            buttontext={
              isStartDate
                ? "Tanggal Akhir Peminjaman"
                : "Tanggal Awal Peminjaman"
            }
          />
        }
      />
      <View style={styles.calendar}>
        <FloatingButtonComponent
          icon={"calendar"}
          onpress={() => setVisible(true)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  itemSection: { flex: 1 },
  calendar: {
    marginTop: 10,
    alignItems: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default UserItemContainer;
