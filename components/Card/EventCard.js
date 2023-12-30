import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const EventCardComponent = ({ eventName, eventDate, status, onPress }) => {
  const eventStatusColor =
    status == "Diajukan"
      ? colors.eventInProgress
      : status == "Disetujui"
      ? colors.eventProcessing
      : status == "Ditolak"
      ? colors.eventRejected
      : colors.eventCompleted;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { borderColor: eventStatusColor }]}>
        <View style={styles.textcontainer}>
          <Text style={styles.title}>{eventName}</Text>
          <Text>{eventDate}</Text>
        </View>
        <Text style={[styles.status, { backgroundColor: eventStatusColor }]}>
          {status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: "black",
    marginTop: 15,
  },
  status: {
    alignSelf: "center",
    textAlign: "center",
    width: 80,
    paddingVertical: 2,
    borderRadius: 20,
    color: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default EventCardComponent;
