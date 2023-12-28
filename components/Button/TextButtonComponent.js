import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TextButtonComponent = ({
  onPress,
  text,
  additionStyle,
  additionButtonStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[additionButtonStyle]}>
      <View style={styles.buttonContainer}>
        <Text style={[styles.buttonText, additionStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "black",
    fontSize: 15,
    marginHorizontal: 10,
  },
});

export default TextButtonComponent;
