import { useSelector } from "react-redux";
import TableComponent from "../../components/Table/TableComponent";
import { ScrollView, StyleSheet, View } from "react-native";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";

const CheckoutContainer = ({ navigation }) => {
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
      <ScrollView>
        <View style={styles.formSection}>
          <TextInputComponent
            textinputname={"Nama Event"}
            placeholder={"Masukkan Nama Event"}
          />
          <TextInputComponent textinputname={"Tanggal Mulai"} />
          <TextInputComponent textinputname={"Waktu Mulai"} />
          <TextInputComponent textinputname={"Tanggal Selesai"} />
          <TextInputComponent textinputname={"Waktu Selesai"} />
        </View>
        <View style={styles.buttoncontainer}>
          <ButtonComponent
            buttontext={"Ajukan"}
            buttonstyle={{ backgroundColor: colors.buttonLogin }}
          />
          <ButtonComponent
            buttontext={"Kembali"}
            buttonstyle={{ backgroundColor: colors.buttonRegister }}
            onPress={() => navigation.navigate("Item")}
          />
        </View>
      </ScrollView>
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
