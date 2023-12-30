import React from "react";
import { useSelector } from "react-redux";

import EventCardComponent from "../../components/Card/EventCard";
import { View, Text, FlatList } from "react-native";

const HistoryEventContainer = ({ navigation }) => {
  const eventData = useSelector((state) => state.event.event);
  const userdata = useSelector((state) => state.login.name);
  const status = useSelector((state) => state.login.status);

  const isAdmin = status === "Admin";
  const isNoPendingRequests = !eventData.length == 0;

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
    <>
      {isNoPendingRequests ? (
        <View>
          <Text style={{ textAlign: "center" }}>
            Tidak Ada Pengajuan Reservasi
          </Text>
        </View>
      ) : (
        <FlatList data={filteredData} renderItem={renderEventCard} />
      )}
    </>
  );
};

export default HistoryEventContainer;
