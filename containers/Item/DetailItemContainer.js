import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "@gluestack-ui/themed";
import itemList from "../../data/local/ItemData";
import { colors } from "../../constants/colors";
import ButtonComponent from "../../components/Button/ButtonComponent";

const DetailItemContainer = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          borderRadius="$2xl"
          source={data.gambar}
          alt="Laptop"
          style={{ width: "100%", height: 200 }}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deskripsi </Text>
        <Text style={styles.textContent}>{data.deskripsi}</Text>
        <Text style={[styles.label, { marginTop: 20 }]}>Ketersediaan </Text>
        <Text style={[styles.textContent, { marginBottom: 20 }]}>
          {data.jumlah}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 25,
    fontStyle: "italic",
    color: colors.buttonLogin,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  textContent: {
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default DetailItemContainer;
