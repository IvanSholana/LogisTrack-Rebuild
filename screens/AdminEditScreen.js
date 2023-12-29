import { View } from "@gluestack-ui/themed";
import AdminEditContainer from "../containers/Item/AdminEditContainer";
import { StyleSheet } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import { ScrollView } from "react-native-gesture-handler";

const AdminEditScreen = ({ navigation, route }) => {
  return (
    <>
      <AppBarComponent content={"Edit Inventaris"} />
      <View style={styles.container}>
        <ScrollView>
          <AdminEditContainer navigation={navigation} route={route} />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AdminEditScreen;
