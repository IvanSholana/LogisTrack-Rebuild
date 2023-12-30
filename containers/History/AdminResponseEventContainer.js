import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../../components/Table/TableComponent";
import { View as ThemedView } from "@gluestack-ui/themed";
import { setEvent } from "../../redux/EventSlice";

const AdminResponseContainer = ({ navigation, route }) => {
  const { data } = route.params;

  const alldatareservation = useSelector((state) => state.event.event);
  const datareservation = alldatareservation.find((e) => e.id == data.id);

  console.log("Data reservation : ");

  const dispatch = useDispatch();
  const itemsdata = [
    ...datareservation.peralatanDipinjam.filter((e) => e.jumlah != 0),
    ...datareservation.ruanganDipinjam.map((e) => ({ nama: e, jumlah: 1 })),
  ];

  const responseEventHandling = (response) => {
    if (response == "ACC") {
      const updateEvent = alldatareservation.map((item) =>
        item.id === data.id
          ? {
              ...item,
              status: "Disetujui",
            }
          : item
      );
      dispatch(setEvent({ event: updateEvent }));
    } else {
      const updateEvent = alldatareservation.map((item) =>
        item.id === data.id
          ? {
              ...item,
              status: "Ditolak",
            }
          : item
      );
      dispatch(setEvent({ event: updateEvent }));
    }

    navigation.goBack();
  };

  console.log(data);
  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <TableComponent data={itemsdata} />
        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>Nama Peminjam</Text>
          <Text style={styles.textContent}>{datareservation.namaPeminjam}</Text>
          <Text style={styles.label}>Nama Kegiatan</Text>
          <Text style={styles.textContent}>{datareservation.namaAcara}</Text>
          <Text style={styles.label}>Timeline Peminjaman</Text>
          <Text style={styles.textContent}>
            {datareservation.tanggalAwal} ({datareservation.waktuAwal}) s/d{" "}
            {datareservation.tanggalAkhir} ({datareservation.waktuAkhir})
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          buttontext={"ACC PEMINJAMAN"}
          buttonstyle={{ backgroundColor: colors.buttonLogin }}
          onPress={() => responseEventHandling("ACC")}
        />
        <ButtonComponent
          buttontext={"TOLAK PEMINJAMAN"}
          buttonstyle={{ backgroundColor: colors.eventRejected }}
          onPress={() => responseEventHandling("TOLAK")}
        />
      </View>
      <ButtonComponent
        buttontext={"KEMBALI"}
        buttonstyle={{ backgroundColor: colors.buttonLogin, margin: 10 }}
        onPress={() => navigation.goBack()}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  content: {
    padding: 20,

    flex: 1,
  },
  label: {
    fontWeight: "bold",
    fontSize: 25,
    color: colors.buttonLogin,
  },
  textContent: {
    marginTop: 2,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default AdminResponseContainer;
