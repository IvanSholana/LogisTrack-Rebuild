import TableComponent from "../../components/Table/TableComponent";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import ButtonComponent from "../../components/Button/ButtonComponent";

const EventDetailContainer = ({ navigation, route }) => {
  const { data } = route.params;
  const { peralatanDipinjam, ruanganDipinjam } = data;

  const alldata = [
    ...peralatanDipinjam.filter((e) => e.jumlah != 0),
    ...ruanganDipinjam.map((e) => ({ nama: e, jumlah: 1 })),
  ];

  const eventStatusColor =
    data.status == "Diajukan"
      ? colors.eventInProgress
      : data.status == "Disetujui"
      ? colors.eventProcessing
      : data.status == "Ditolak"
      ? colors.eventRejected
      : colors.eventCompleted;

  return (
    <>
      <View style={styles.content}>
        <TableComponent data={alldata} />
        <Text style={[styles.label, { marginTop: 20 }]}>Nama Kegiatan</Text>
        <Text style={styles.textContent}>{data.namaAcara}</Text>
        <Text style={[styles.label, { marginTop: 20 }]}>Jadwal Kegiatan</Text>
        <Text style={styles.textContent}>
          {data.tanggalAwal} ({data.waktuAwal}) s/d {data.tanggalAkhir} (
          {data.waktuAkhir})
        </Text>
        <Text style={[styles.status, { backgroundColor: eventStatusColor }]}>
          {data.status}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          buttonstyle={{
            backgroundColor: colors.buttonLogin,
          }}
          buttontext={"Kembali"}
          onPress={() => navigation.goBack()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  content: { paddingHorizontal: 20, marginTop: 10 },
  status: {
    marginTop: 20,
    textAlign: "center",
    width: 80,
    paddingVertical: 2,
    borderRadius: 20,
    color: "white",
  },
});

export default EventDetailContainer;
