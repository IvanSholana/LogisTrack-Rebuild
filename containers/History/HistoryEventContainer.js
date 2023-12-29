import { useSelector } from "react-redux";
import EventCardComponent from "../../components/Card/EventCard";
import { FlatList } from "react-native";

const HistoryEventContainer = ({ navigation }) => {
  const eventData = useSelector((state) => state.event.event);
  const userdata = useSelector((state) => state.login.name);
  const status = useSelector((state) => state.login.status);

  return (
    <>
      <FlatList
        data={
          status !== "Admin"
            ? eventData.filter((e) => e.namaPeminjam == userdata)
            : eventData.filter((e) => e.status == "Diajukan")
        }
        renderItem={({ item }) => (
          <EventCardComponent
            eventDate={item.tanggalAwal}
            eventName={item.namaAcara}
            status={item.status}
            onPress={() => navigation.navigate("DetailEvent", { data: item })}
          />
        )}
      />
    </>
  );
};

export default HistoryEventContainer;
