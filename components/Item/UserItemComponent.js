import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Icon } from "react-native-vector-icons/icon";

const UserItemComponent = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    if (count < data.jumlah) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      return (
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate("detail", { detail: data })}
        >
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
    </>
  );
};

export default UserItemComponent;
