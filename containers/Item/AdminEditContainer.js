import { useState } from "react";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import { StyleSheet, View, ScrollView } from "react-native";
import { Image } from "@gluestack-ui/themed";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { setItemRoom } from "../../redux/ItemRoomSlice";

const AdminEditContainer = ({ route, navigation }) => {
  const { data, screen } = route.params;
  const [deskripsi, setDeskripsi] = useState(data.deskripsi);
  const [nama, setNama] = useState(data.nama);
  const [jumlah, setJumlah] = useState(
    screen == "Peralatan" ? data.jumlah : data.kapasitas
  );

  const dispatch = useDispatch();

  const { itemsdata, roomsdata } = useSelector((state) => state.itemNroom);

  const editInventoryHandling = (editedItem) => {
    console.log(editedItem);
    if (screen === "Peralatan") {
      if (
        !editedItem.nama ||
        !editedItem.deskripsi ||
        (editedItem.jumlah != null && isNaN(editedItem.jumlah))
      ) {
        console.error("Nilai yang diedit tidak boleh kosong atau tidak valid.");
        return;
      }

      const updatedItemsData = itemsdata.map((item) =>
        item.id === data.id
          ? {
              ...item,
              nama: editedItem.nama,
              deskripsi: editedItem.deskripsi,
              jumlah: editedItem.jumlah,
            }
          : item
      );

      dispatch(setItemRoom({ itemsdata: updatedItemsData, roomsdata }));
    } else {
      if (
        !editedItem.nama ||
        !editedItem.deskripsi ||
        (editedItem.kapasitas != null && isNaN(editedItem.kapasitas))
      ) {
        console.error("Nilai yang diedit tidak boleh kosong atau tidak valid.");
        return;
      }

      const updatedRoomsData = roomsdata.map((room) =>
        data.id === room.id
          ? {
              ...room,
              nama: editedItem.nama,
              deskripsi: editedItem.deskripsi,
              kapasitas: editedItem.kapasitas,
            }
          : room
      );

      dispatch(setItemRoom({ itemsdata, roomsdata: updatedRoomsData }));
    }
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            borderRadius="$2xl"
            source={screen == "Peralatan" ? data.gambar : data.foto}
            alt="Laptop"
            style={{ width: "100%", height: 200 }}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.content}>
          <TextInputComponent
            textinputname={"Nama"}
            fillValue={nama}
            setValue={setNama}
          />
          <TextInputComponent
            textinputname={"Deskripsi"}
            fillValue={deskripsi}
            setValue={setDeskripsi}
          />
          <TextInputComponent
            textinputname={screen == "Peralatan" ? "Ketersediaan" : "Kapasitas"}
            fillValue={String(jumlah)}
            setValue={setJumlah}
            keyboardType={"numeric"}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          buttonstyle={{
            backgroundColor: colors.buttonLogin,
          }}
          buttontext={"Simpan Perubahan"}
          onPress={() => {
            screen == "Peralatan"
              ? editInventoryHandling({
                  nama: nama,
                  deskripsi: deskripsi,
                  jumlah: jumlah,
                })
              : editInventoryHandling({
                  nama: nama,
                  deskripsi: deskripsi,
                  kapasitas: jumlah,
                });
          }}
        />
        <ButtonComponent
          buttonstyle={{
            backgroundColor: colors.buttonLogin,
          }}
          buttontext={"Kembali"}
          onPress={() => navigation.goBack()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  image: {
    alignItems: "center",
    padding: 20,
  },
  content: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 90,
    justifyContent: "space-between",
    marginHorizontal: 10,
    height: 140,
    padding: 10,
  },
});

export default AdminEditContainer;
