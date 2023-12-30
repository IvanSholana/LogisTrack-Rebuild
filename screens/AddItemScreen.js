import { View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import AddItemContainer from "../containers/Item/AddItemContainer";
import { ScrollView } from "react-native-gesture-handler";

const AddItemScreen = ({ route, navigation }) => {
  return (
    <>
      <AppBarComponent content={"Add Inventory"} />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <AddItemContainer route={route} navigation={navigation} />
        </ScrollView>
      </View>
    </>
  );
};

export default AddItemScreen;
