import { useSelector } from "react-redux";
import TableComponent from "../../components/Table/TableComponent";
import { ScrollView, StyleSheet, View } from "react-native";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import { useState } from "react";

const CheckoutContainer = ({ navigation }) => {
  const { itemsreservation: itemsdata, roomsreservation: itemsroom } =
    useSelector((state) => state.reservation);

  const { startDate, endDate } = useSelector((state) => state.date);

  let tanggalMulai = "";
  let jamMulai = "";
  let tanggalAkhir = "";
  let jamAkhir = "";

  if (startDate && endDate) {
    [tanggalMulai, jamMulai] = startDate.split(" ");
    [tanggalAkhir, jamAkhir] = endDate.split(" ");
  }

  const [namaEvent, setNameEvent] = useState("");

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
            setValue={setNameEvent}
          />
          <TextInputComponent
            textinputname={"Tanggal Mulai"}
            isEdit={false}
            fillValue={tanggalMulai}
          />
          <TextInputComponent
            textinputname={"Waktu Mulai"}
            isEdit={false}
            fillValue={jamMulai}
          />
          <TextInputComponent
            textinputname={"Tanggal Selesai"}
            isEdit={false}
            fillValue={tanggalAkhir}
          />
          <TextInputComponent
            textinputname={"Waktu Selesai"}
            isEdit={false}
            fillValue={jamAkhir}
          />
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
