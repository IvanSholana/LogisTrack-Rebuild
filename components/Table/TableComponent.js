import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../../constants/colors";

const TableComponent = ({ data }) => {
  const datainventory = [...data];
  return (
    <>
      <View style={styles.table}>
        <View style={styles.heading}>
          <Text style={styles.head}>Inventaris</Text>
          <Text style={styles.head}>Jumlah</Text>
        </View>
        <View>
          {datainventory.length > 0 ? (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={styles.content}>
                  <Text style={styles.textContent}>{item.nama}</Text>
                  <Text style={styles.textContent}>{item.jumlah}</Text>
                </View>
              )}
            />
          ) : (
            <View style={styles.content}>
              <Text style={styles.textContent}>KOSONG</Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  heading: { flexDirection: "row", borderWidth: 1 },
  table: {
    borderWidth: 1,
  },
  head: {
    backgroundColor: colors.buttonLogin,
    color: "white",
    flex: 1,
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 15,
    borderWidth: 0.5,
  },
  content: {
    flexDirection: "row",
  },
  textContent: {
    flex: 1,
    textAlign: "center",
    padding: 5,
    borderWidth: 0.5,
  },
});

export default TableComponent;
