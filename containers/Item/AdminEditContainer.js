import { useState } from "react";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import { StyleSheet, View, ScrollView } from "react-native"; // Import ScrollView
import { Image } from "@gluestack-ui/themed";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";

const AdminEditContainer = ({ route, navigation }) => {
  const { data, screen } = route.params;
  const [deskripsi, setDeskripsi] = useState(data.deskripsi);
  const [nama, setNama] = useState(data.nama);
  const [jumlah, setJumlah] = useState(
    screen == "Peralatan" ? data.jumlah : data.kapasitas
  );

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
          />
        </View>
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
    marginTop: 150,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
});

export default AdminEditContainer;
