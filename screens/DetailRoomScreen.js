import { StyleSheet, View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import DetailRoomContainer from "../containers/Item/DetailRoomContainer";

const DetailRoomScreen = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.container}>
        <AppBarComponent content={"Detail Items"} />
        <View style={styles.content}>
          <DetailRoomContainer route={route} navigation={navigation} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});

export default DetailRoomScreen;
