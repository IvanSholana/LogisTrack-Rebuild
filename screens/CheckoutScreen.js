import { StyleSheet, View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import CheckoutContainer from "../containers/Checkout/CheckoutContainer";
import { useSelector } from "react-redux";

const CheckoutScreen = ({ navigation, route }) => {
  // const { startDate, endDate } = useSelector((state) => state.date);
  return (
    <>
      <View style={styles.container}>
        <AppBarComponent content={"Check Out"} />
        <CheckoutContainer navigation={navigation} route={route} />
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
