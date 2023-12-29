import { StyleSheet, View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import DetailItemContainer from "../containers/Item/DetailItemContainer";

const DetailItemScreen = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.container}>
        <AppBarComponent content={"Detail Items"} />
        <View style={styles.content}>
          <DetailItemContainer route={route} navigation={navigation} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default DetailItemScreen;
