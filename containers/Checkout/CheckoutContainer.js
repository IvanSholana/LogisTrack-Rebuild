import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../../components/Table/TableComponent";
import { ScrollView, StyleSheet, View } from "react-native";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import { useEffect, useState } from "react";
import WarningText from "../../components/WarningText/WarningTextComponent";
import { setReservation } from "../../redux/ReservationSlice";
import { setEvent } from "../../redux/EventSlice";
import itemList from "../../data/local/ItemData";

const CheckoutContainer = ({ navigation, route }) => {
  const { itemsreservation: itemsdata, roomsreservation: itemsroom } =
    useSelector((state) => state.reservation);
  const { eventDate } = route.params;

  const eventData = useSelector((state) => state.event.event);
  const username = useSelector((state) => state.login.name);
  const [namaEvent, setNameEvent] = useState("");
  const dispatch = useDispatch();

  let tanggalMulai = "";
  let jamMulai = "";
  let tanggalAkhir = "";
  let jamAkhir = "";

  [tanggalMulai, jamMulai] = String(eventDate[0]).split(" ");
  [tanggalAkhir, jamAkhir] = String(eventDate[1]).split(" ");

  const [isSuccess, setIsSucces] = useState(false);
  const data = [
    ...itemsdata.filter((e) => e.jumlah !== 0),
    ...itemsroom.map((e) => ({ nama: e, jumlah: 1 })),
  ];

  const CheckoutHandler = () => {
    if (
      data.length > 0 &&
      itemsdata &&
      itemsroom &&
      tanggalMulai &&
      tanggalAkhir &&
      jamMulai &&
      jamAkhir &&
      namaEvent.trim() !== ""
    ) {
      const currentTime = new Date();
      const localTimeString = currentTime.toLocaleString();

      const NewReservation = {
        id: `${localTimeString}_${username}`,
        namaPeminjam: username,
        namaAcara: namaEvent,
        peralatanDipinjam: itemsdata,
        ruanganDipinjam: itemsroom,
        tanggalAwal: tanggalMulai,
        waktuAwal: jamMulai,
        tanggalAkhir: tanggalAkhir,
        waktuAkhir: jamAkhir,
        status: "Diajukan",
      };

      dispatch(setEvent({ event: [...eventData, NewReservation] })); // POST TO DB EVENT
      dispatch(
        setReservation({
          itemsreservation: itemList.map((e) => ({ nama: e.nama, jumlah: 0 })),
          roomsreservation: [],
        })
      );
      navigation.navigate("Item", { screen: "Peralatan" });
    } else {
      setIsSucces(true);
    }
  };
  return (
    <>
      <View style={styles.tableSection}>
        <TableComponent data={data} />
      </View>
      <ScrollView>
        <View style={styles.formSection}>
          <TextInputComponent
            setValue={setNameEvent}
            placeholder={"Masukkan Nama Event..."}
            textinputname={"Nama Event"}
          />
          {isSuccess && (
            <WarningText content={"Pastikan semua data telah terisi!"} />
          )}
          <TextInputComponent
            textinputname={"Tanggal Mulai"}
            isEdit={false}
            fillValue={tanggalMulai}
          />
          {isSuccess && (
            <WarningText content={"Pastikan semua data telah terisi!"} />
          )}
          <TextInputComponent
            textinputname={"Waktu Mulai"}
            isEdit={false}
            fillValue={jamMulai}
          />
          {isSuccess && (
            <WarningText content={"Pastikan semua data telah terisi!"} />
          )}
          <TextInputComponent
            textinputname={"Tanggal Selesai"}
            isEdit={false}
            fillValue={tanggalAkhir}
          />
          {isSuccess && (
            <WarningText content={"Pastikan semua data telah terisi!"} />
          )}
          <TextInputComponent
            textinputname={"Waktu Selesai"}
            isEdit={false}
            fillValue={jamAkhir}
          />
          {isSuccess && (
            <WarningText content={"Pastikan semua data telah terisi!"} />
          )}
        </View>
        <View style={styles.buttoncontainer}>
          <ButtonComponent
            buttontext={"Ajukan"}
            buttonstyle={{ backgroundColor: colors.buttonLogin }}
            onPress={CheckoutHandler}
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
  input: {
    height: 40,
    borderColor: "#ccc", // Warna border input
    borderWidth: 1,
    borderRadius: 8, // Rounding border input
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333", // Warna teks input
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
  container: {
    margin: 10,
  },
  buttoncontainer: {
    height: 120,
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default CheckoutContainer;
