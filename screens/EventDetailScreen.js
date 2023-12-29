import { StyleSheet, View } from "react-native";
import EventDetailContainer from "../containers/History/EventDetailContainer";
import AppBarComponent from "../components/AppBar/AppBarComponent";

const EventDetailScreen = ({ navigation, route }) => {
  return (
    <>
      <AppBarComponent content={"Event Detail"} />
      <View style={styles.container}>
        <EventDetailContainer navigation={navigation} route={route} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});
export default EventDetailScreen;
