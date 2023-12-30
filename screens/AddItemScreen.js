import { View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import AddItemContainer from "../containers/Item/AddItemContainer";

const AddItemScreen = () => {
  return (
    <>
      <AppBarComponent content={"Add Inventory"} />
      <View style={{ flex: 1 }}>
        <AddItemContainer />
      </View>
    </>
  );
};

export default AddItemScreen;
