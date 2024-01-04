import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../../constants/colors";
import TextButtonComponent from "../../components/Button/TextButtonComponent";
import EventCardComponent from "../../components/Card/EventCard";

const AdminProfileContainer = ({ navigation }) => {
  const userdata = useSelector((state) => state.login);
  const eventdata = useSelector((state) => state.event.event); // GET FROM EVENT DB

  const statusLabels = {
    Dosen: "NIDN",
    Mahasiswa: "NIM",
    Default: "NIP",
  };

  const statusLabel = statusLabels[userdata.status] || statusLabels.Default;
  const [isSelect, setSelected] = useState("All");

  const [showData, setShowData] = useState([]);

  useEffect(() => {
    if (isSelect == "All") {
      setShowData(eventdata.map((e) => e));
    } else if (isSelect == "Done") {
      setShowData(eventdata.filter((e) => e.status == "Selesai"));
    } else if (isSelect == "rejected") {
      setShowData(eventdata.filter((e) => e.status == "Ditolak"));
    } else if (isSelect == "Accepted") {
      setShowData(eventdata.filter((e) => e.status == "Disetujui"));
    }
  }, [isSelect]);

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.label}>Nama Lengkap</Text>
          <Text style={styles.content}>{userdata.name}</Text>
          <Text style={styles.label}>{statusLabel}</Text>
          <Text style={styles.content}>{userdata.nimNidn}</Text>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.content}>{userdata.status}</Text>
        </View>
        <View style={styles.buttoncontainer}>
          <TextButtonComponent
            additionStyle={{
              color: isSelect == "All" ? "white" : "black",
              fontWeight: "bold",
            }}
            text={"Semua"}
            onPress={() => setSelected("All")}
            additionButtonStyle={{
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 5,
              borderColor: isSelect == "All" ? "white" : "black",
              backgroundColor:
                isSelect == "All" ? colors.eventInProgress : "white",
            }}
          />
          <TextButtonComponent
            onPress={() => setSelected("rejected")}
            text={"Ditolak"}
            additionStyle={{
              color: isSelect == "rejected" ? "white" : "black",
              fontWeight: "bold",
            }}
            additionButtonStyle={{
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 5,
              borderColor: isSelect == "rejected" ? "white" : "black",
              fontWeight: "bold",
              backgroundColor:
                isSelect == "rejected" ? colors.eventRejected : "white",
            }}
          />
          <TextButtonComponent
            additionStyle={{
              color: isSelect == "Accepted" ? "white" : "black",
              fontWeight: "bold",
            }}
            text={"Disetujui"}
            onPress={() => setSelected("Accepted")}
            additionButtonStyle={{
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 5,
              borderColor: isSelect == "Accepted" ? "white" : "black",
              backgroundColor:
                isSelect == "Accepted" ? colors.eventProcessing : "white",
            }}
          />
          <TextButtonComponent
            additionStyle={{
              color: isSelect == "Done" ? "white" : "black",
              fontWeight: "bold",
            }}
            text={"Selesai"}
            onPress={() => setSelected("Done")}
            additionButtonStyle={{
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 5,
              borderColor: isSelect == "Done" ? "white" : "black",
              backgroundColor:
                isSelect == "Done" ? colors.eventCompleted : "white",
            }}
          />
        </View>
        <View>
          <FlatList
            data={showData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <EventCardComponent
                  eventDate={item.tanggalAwal}
                  eventName={item.namaAcara}
                  status={item.status}
                  onPress={() =>
                    navigation.navigate("DetailEvent", { data: item })
                  }
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  content: {
    fontSize: 15,
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default AdminProfileContainer;
