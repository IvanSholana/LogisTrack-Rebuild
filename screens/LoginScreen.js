import { StyleSheet, View, Image, ScrollView } from "react-native";
import LoginContainer from "../containers/Login/LoginContainer";

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.cover}>
            <Image
              source={require("../assets/images/LogisTrack.png")}
              resizeMode="contain"
              style={styles.logo} // Tambahkan style untuk logo jika diperlukan
            />
            <Image
              source={require("../assets/images/cuate.png")}
              style={styles.cuateImage} // Tambahkan style untuk gambar cuate jika diperlukan
            />
          </View>
          <View style={styles.loginSection}>
            <LoginContainer navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    paddingTop: 40,
  },
  cover: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginRight: 10, // Jarak antara logo dan gambar cuate
    marginBottom: 10,
  },
  cuateImage: {
    width: "100%",
  },

  loginSection: {
    padding: 10,
  },
});

export default LoginScreen;
