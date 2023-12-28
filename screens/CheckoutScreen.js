import { StyleSheet, View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import CheckoutContainer from "../containers/Checkout/CheckoutContainer";

const CheckoutScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <AppBarComponent content={"Check Out"} />
        <View style={styles.content}>
          <CheckoutContainer />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default CheckoutScreen;
