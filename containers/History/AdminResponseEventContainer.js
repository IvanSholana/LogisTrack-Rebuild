import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../../components/Table/TableComponent";
import { View as ThemedView } from "@gluestack-ui/themed";
import { setEvent } from "../../redux/EventSlice";
import DialogComponent from "../../components/Dialog/DialogComponent";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import { ScrollView } from "react-native-gesture-handler";

const AdminResponseContainer = ({ navigation, route }) => {
  const { data } = route.params;

  const alldatareservation = useSelector((state) => state.event.event);
  const datareservation = alldatareservation.find((e) => e.id == data.id);

  const [isVisible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState(false);

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
      if (confirmation == false) {
        return;
      } else {
        setVisible(false);
        const updateEvent = alldatareservation.map((item) =>
          item.id === data.id
            ? {
                ...item,
                status: "Ditolak",
                pesan: message,
              }
            : item
        );
        dispatch(setEvent({ event: updateEvent }));
      }
    }

    navigation.goBack();
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <View>
          <TableComponent data={itemsdata} />
        </View>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.label}>Nama Peminjam</Text>
              <Text style={styles.textContent}>
                {datareservation.namaPeminjam}
              </Text>
              <Text style={styles.label}>Nama Kegiatan</Text>
              <Text style={styles.textContent}>
                {datareservation.namaAcara}
              </Text>
              <Text style={styles.label}>Timeline Peminjaman</Text>
              <Text style={styles.textContent}>
                {datareservation.tanggalAwal} ({datareservation.waktuAwal}) s/d{" "}
                {datareservation.tanggalAkhir} ({datareservation.waktuAkhir})
              </Text>
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
                onPress={() => {
                  setVisible(true);
                }}
              />
            </View>
            <ButtonComponent
              buttontext={"KEMBALI"}
              buttonstyle={{
                backgroundColor: colors.buttonLogin,
                marginTop: 10,
              }}
              onPress={() => navigation.goBack()}
            />
          </View>
        </ScrollView>
      </View>
      <DialogComponent
        isVisible={isVisible}
        content={
          <DialogMessage
            setMessage={setMessage}
            setConfirmation={setConfirmation}
            setVisible={setVisible}
            setRespondHandling={responseEventHandling}
          />
        }
        setVisible={setVisible}
        title={"Alasan Penolakan : "}
      />
    </ThemedView>
  );
};

const DialogMessage = ({ setMessage, setConfirmation, setRespondHandling }) => {
  return (
    <>
      <TextInputComponent
        placeholder={"Masukkan Alasan..."}
        setValue={setMessage}
      />
      <ButtonComponent
        buttontext={"KONFIRMASI PENOLAKAN"}
        buttonstyle={{
          backgroundColor: colors.eventRejected,
          width: "95%",
          alignSelf: "center",
        }}
        onPress={() => {
          setConfirmation(true);
          setRespondHandling("TOLAK");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  content: {
    padding: 20,
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
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AdminResponseContainer;
