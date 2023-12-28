import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../../constants/colors";

const UserProfileContainer = () => {
  const userdata = useSelector((state) => state.login);
  console.log(userdata);
  return (
    <>
      <Text style={styles.label}>Nama Lengkap</Text>
      <Text style={styles.content}>{userdata.name}</Text>
      {userdata.status == "Dosen" ? (
        <Text style={styles.label}>NIDN</Text>
      ) : (
        <Text style={styles.label}>NIM</Text>
      )}
      <Text style={styles.content}>{userdata.nimNidn}</Text>
      <Text style={styles.label}>Status</Text>
      <Text style={styles.content}>{userdata.status}</Text>
    </>
  );
};

const UserProfileAppBar = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Profile Account</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 24,
    color: "#6A994E",
    textAlignVertical: "center",
    paddingLeft: 20,
    backgroundColor: colors.loginText,
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

export { UserProfileContainer, UserProfileAppBar };
