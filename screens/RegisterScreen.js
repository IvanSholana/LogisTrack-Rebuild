import { ScrollView, StyleSheet, View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import RegisterContainer from "../containers/Register/RegisterContainer";

const RegisterScreen = ({ navigation }) => {
  return (
    <>
      <AppBarComponent content={"Register"} />
      <View style={styles.container}>
        <ScrollView>
          <RegisterContainer navigation={navigation} />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 5 },
});

export default RegisterScreen;
