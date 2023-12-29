import DateTimePicker from "react-native-ui-datepicker";
import { Dialog } from "react-native-simple-dialogs";
import { StyleSheet, Text, View } from "react-native";

const DatePickers = ({
  isVisible,
  setVisible,
  title,
  item,
  value,
  setValue,
  content,
}) => {
  return (
    <Dialog
      visible={isVisible}
      title={title}
      onTouchOutside={() => setVisible(false)}
    >
      <View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          {content}
        </Text>
        <View>
          <DateTimePicker
            value={value}
            onValueChange={(date) => setValue(date)}
          />
        </View>
      </View>
      {item}
    </Dialog>
  );
};

const styles = StyleSheet.create({});

export default DatePickers;
