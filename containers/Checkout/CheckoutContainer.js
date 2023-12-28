import { useSelector } from "react-redux";
import TableComponent from "../../components/Table/TableComponent";
import { StyleSheet, View } from "react-native";
import TextInputComponent from "../../components/TextInput/TextInputComponent";

const CheckoutContainer = () => {
  const { itemsreservation: itemsdata, roomsreservation: itemsroom } =
    useSelector((state) => state.reservation);

  const data = [
    ...itemsdata.filter((e) => e.jumlah !== 0),
    ...itemsroom.map((e) => ({ nama: e, jumlah: 1 })),
  ];
  return (
    <>
      <View style={styles.tableSection}>
        <TableComponent data={data} />
      </View>
      <View style={styles.formSection}>
        <TextInputComponent />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tableSection: {
    margin: 10,
  },
  formSection: {},
});

export default CheckoutContainer;
