import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

const ButtonComponent = ({ buttontext, buttonstyle, textstyle, onPress }) => {
  return (
    <>
      <TouchableOpacity style={[styles.button, buttonstyle]} onPress={onPress}>
        <Text style={[styles.text, textstyle]}>{buttontext}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 15,
  },
  button: {
    padding: 15,
    borderRadius: 10,
  },
});

export default ButtonComponent;
