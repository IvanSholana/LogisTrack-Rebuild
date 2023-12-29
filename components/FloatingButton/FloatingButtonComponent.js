import { TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";

const FloatingButtonComponent = ({ icon, onpress }) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => onpress(true)}>
        <Icon name={icon} size={30} color="white" />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    backgroundColor: colors.buttonLogin,
    borderRadius: 100,
    elevation: 5,
  },
});

export default FloatingButtonComponent;
