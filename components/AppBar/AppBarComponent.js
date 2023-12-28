import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../constants/colors";

const AppBarComponent = ({ content }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>{content}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 24,
    color: "#6A994E",
    textAlignVertical: "center",
    paddingLeft: 20,
    backgroundColor: colors.loginText,
  },
});

export default AppBarComponent;
