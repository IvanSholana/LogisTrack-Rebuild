import React, { useState } from "react";
import { Pressable, View } from "react-native";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/colors";
import ButtonComponent from "../../components/Button/ButtonComponent";
import WarningText from "../../components/WarningText/WarningTextComponent";

const AddItemContainer = () => {
  const role = "Peralatan";

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [quantityCapacity, setQuantityCapacity] = useState("");
  const [isComplete, setIsComplete] = useState(true);

  const validateForm = () => {
    const isItemNameValid = itemName.trim() !== "";
    const isDescriptionValid = description.trim() !== "";
    const isQuantityCapacityValid =
      !isNaN(quantityCapacity) && quantityCapacity !== "";

    return isItemNameValid && isDescriptionValid && isQuantityCapacityValid;
  };

  const handleAddItem = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      // Lakukan aksi tambahkan item
      console.log("Tambahkan item ke inventaris");
    } else {
      // Tampilkan pesan kesalahan atau lakukan aksi yang sesuai
      setIsComplete(false);
      console.log("Form tidak valid");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ paddingHorizontal: 10 }}>
        <Pressable
          style={{
            borderWidth: 1,
            width: 100,
            height: 100,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            margin: 30,
          }}
        >
          <Icon name="camera" size={30} color={colors.registerText} />
        </Pressable>
        <TextInputComponent
          textinputname={
            role === "Peralatan" ? "Nama Peralatan" : "Nama Ruangan"
          }
          placeholder={
            role === "Peralatan"
              ? "Masukkan Nama Peralatan..."
              : "Masukkan Nama Ruangan..."
          }
          value={itemName}
          setValue={setItemName}
          isValid={itemName.trim() !== ""}
        />
        {!isComplete && (
          <WarningText
            content={"Tambah inventaris gagal, periksa kembali inputan anda!"}
          />
        )}
        <TextInputComponent
          textinputname={"Deskripsi"}
          placeholder={"Masukkan Deskripsi..."}
          value={description}
          setValue={setDescription}
          isValid={description.trim() !== ""}
        />
        {!isComplete && (
          <WarningText
            content={"Tambah inventaris gagal, periksa kembali inputan anda!"}
          />
        )}
        <TextInputComponent
          textinputname={
            role === "Peralatan" ? "Jumlah Ketersedian" : "Kapasitas Ruangan"
          }
          placeholder={
            role === "Peralatan"
              ? "Masukkan Jumlah Ketersedian"
              : "Masukkan Kapasitas Ruangan"
          }
          keyboardType={"numeric"}
          value={quantityCapacity}
          onChangeText={setQuantityCapacity}
          isValid={!isNaN(quantityCapacity) && quantityCapacity !== ""}
        />
        {!isComplete && (
          <WarningText
            content={"Tambah inventaris gagal, periksa kembali inputan anda!"}
          />
        )}
      </View>
      <View style={{ marginVertical: 20 }}>
        <ButtonComponent
          buttontext={"TAMBAHKAN INVENTARIS"}
          buttonstyle={{
            backgroundColor: colors.buttonLogin,
            marginHorizontal: 20,
            marginVertical: 10,
          }}
          onPress={handleAddItem}
          disabled={!validateForm()}
        />
        <ButtonComponent
          buttontext={"KEMBALI"}
          buttonstyle={{
            backgroundColor: colors.buttonRegister,
            marginHorizontal: 20,
          }}
        />
      </View>
    </View>
  );
};

export default AddItemContainer;
