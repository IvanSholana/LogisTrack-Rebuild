import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";

const WarningText = ({ content }) => {
  return (
    <>
      <Text style={styles.warning}>{content}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  warning: {
    color: colors.eventRejected,
    marginHorizontal: 10,
  },
});

export default WarningText;
