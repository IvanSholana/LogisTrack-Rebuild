import { StyleSheet, View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import HistoryEventContainer from "../containers/History/HistoryEventContainer";

const HistoryEventScreen = () => {
  return (
    <>
      <AppBarComponent content={"Reservation"} />
      <View style={styles.container}>
        <HistoryEventContainer />
      </View>
    </>
  );
};

export default HistoryEventScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 10,
  },
});
