import React from "react";
import { Dialog } from "react-native-simple-dialogs";
import { Text, View } from "react-native";

const DialogComponent = ({
  isVisible,
  setVisible,
  content,
  title,
  titleStyle,
}) => {
  return (
    <Dialog visible={isVisible} onTouchOutside={() => setVisible(false)}>
      <View>
        <View>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        </View>
        <View>{content}</View>
      </View>
    </Dialog>
  );
};

const styles = {
  title: {
    fontSize: 24,
    color: "#6A994E",
    textAlign: "center",
  },
};

export default DialogComponent;
