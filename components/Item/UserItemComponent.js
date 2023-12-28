import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { setReservation } from "../../redux/ReservationSlice";
import { colors } from "../../constants/colors";

const UserItemComponent = ({ data, detail }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const detailitemsdata = useSelector((state) => state.itemNroom.itemsdata);
  const activeItem = detailitemsdata.find((e) => e.nama === data.nama);

  const updateData = (nama, newValue) => {
    const updatedItemsData = itemsdata.map((item) => {
      if (item.nama === nama) {
        return { ...item, jumlah: newValue };
      }
      return item;
    });
    dispatch(setReservation(updatedItemsData));
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      // updateData(data.nama, count - 1); // Kurangi 1 dari count saat menurunkan jumlah
    }
    console.log;
  };

  const handleIncrement = () => {
    console.log(count);
    if (count < activeItem.jumlah) {
      setCount((prevCount) => prevCount + 1);
      // updateData(data.nama, count + 1); // Tambah 1 ke count saat menaikkan jumlah
    }
  };

  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.itemName}>{data.nama}</Text>
      </Pressable>

      <View style={styles.countItem}>
        <Pressable onPress={handleDecrement} style={styles.countButton}>
          <Icon name="minus" size={15} color="black" />
        </Pressable>
        <Text style={styles.itemCount}>{count}</Text>
        <Pressable onPress={handleIncrement} style={styles.countButton}>
          <Icon name="plus" size={15} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    justifyContent: "space-between",
    margin: 10,
    borderColor: colors.buttonRegister,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  countItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  countButton: {
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  itemCount: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default UserItemComponent;
