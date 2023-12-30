import { StyleSheet, View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import AdminResponseContainer from "../containers/History/AdminResponseEventContainer";

const AdminResponseScreen = ({ navigation, route }) => {
  return (
    <>
      <AppBarComponent content={"Response Reservation"} />
      <View style={styles.content}>
        <AdminResponseContainer navigation={navigation} route={route} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default AdminResponseScreen;
