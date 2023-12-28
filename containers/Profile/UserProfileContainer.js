import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import DialogComponent from "../../components/Dialog/DialogComponent";

const UserProfileContainer = () => {
  const userdata = useSelector((state) => state.login);

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

const UserProfileAppBar = ({ navigation }) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Profile Account</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setDialogVisible(true)}>
            <Icon name="info-circle" size={30} color={colors.registerText} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Icon name="sign-out" size={30} color={colors.registerText} />
          </TouchableOpacity>
        </View>
      </View>
      <ContactDialog
        setDialogVisible={setDialogVisible}
        dialogVisible={dialogVisible}
      />
    </>
  );
};

const ContactDialog = ({ dialogVisible, setDialogVisible }) => {
  return (
    <>
      <DialogComponent
        isVisible={dialogVisible}
        setVisible={setDialogVisible}
        title="Hubungi Logistik"
        content={
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="phone" size={30} color={colors.registerText} />
              <View style={{ marginLeft: 10 }}>
                <Text>Whatsapp</Text>
                <Text>081234567890</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <Icon name="at" size={30} color={colors.registerText} />
              <View style={{ marginLeft: 10 }}>
                <Text>Email</Text>
                <Text>logistik.kampusmu.ac.id</Text>
              </View>
            </View>
          </View>
        }
      />
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
    flexDirection: "row",
    justifyContent: "space-between",
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
  buttonContainer: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around",
  },
});

export { UserProfileContainer, UserProfileAppBar };
