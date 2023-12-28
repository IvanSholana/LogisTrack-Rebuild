import { StyleSheet, View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import CheckoutContainer from "../containers/Checkout/CheckoutContainer";
import { ScrollView } from "react-native-gesture-handler";

const CheckoutScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <AppBarComponent content={"Check Out"} />
        <CheckoutContainer navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CheckoutScreen;
