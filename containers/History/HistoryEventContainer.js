import React from "react";
import { useSelector } from "react-redux";
import { View, Text, FlatList } from "react-native";
import EventCardComponent from "../../components/Card/EventCard";

const HistoryEventContainer = ({ navigation }) => {
  const eventData = useSelector((state) => state.event.event); // GET FROM DB
  const userdata = useSelector((state) => state.login.name); 
  const status = useSelector((state) => state.login.status); 

  const isAdmin = status === "Admin";
  const isNoPendingRequests = eventData.length === 0;

  const filteredData = !isAdmin
    ? eventData.filter((e) => e.namaPeminjam === userdata)
    : eventData.filter((e) => e.status === "Diajukan");

  const renderEventCard = ({ item }) => (
    <EventCardComponent
      eventDate={item.tanggalAwal}
      eventName={item.namaAcara}
      status={item.status}
      onPress={() =>
        navigation.navigate(
          status === "Admin" ? "AdminResponse" : "DetailEvent",
          { data: item }
        )
      }
    />
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      {isNoPendingRequests && (
        <View style={{ alignContent: "center" }}>
          <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Tidak Ada Pengajuan Reservasi
          </Text>
        </View>
      )}

      {isAdmin && filteredData.length === 0 && (
        <View style={{ alignContent: "center" }}>
          <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Tidak Ada Pengajuan Reservasi!
          </Text>
        </View>
      )}

      {!isNoPendingRequests && filteredData.length > 0 && (
        <FlatList data={filteredData} renderItem={renderEventCard} />
      )}
    </View>
  );
};

export default HistoryEventContainer;
