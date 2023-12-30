import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../../constants/colors";

const AdminProfileContainer = () => {
  const userdata = useSelector((state) => state.login);

  const statusLabels = {
    Dosen: "NIDN",
    Mahasiswa: "NIM",
    Default: "NIP",
  };

  const statusLabel = statusLabels[userdata.status] || statusLabels.Default;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Lengkap</Text>
      <Text style={styles.content}>{userdata.name}</Text>
      <Text style={styles.label}>{statusLabel}</Text>
      <Text style={styles.content}>{userdata.nimNidn}</Text>
      <Text style={styles.label}>Status</Text>
      <Text style={styles.content}>{userdata.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  content: {
    fontSize: 15,
  },
});

export default AdminProfileContainer;
