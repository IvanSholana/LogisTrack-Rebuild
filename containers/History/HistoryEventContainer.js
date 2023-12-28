import { useSelector } from "react-redux";
import EventCardComponent from "../../components/Card/EventCard";
import { FlatList } from "react-native";

const HistoryEventContainer = () => {
  const eventData = useSelector((state) => state.event.event);

  console.log(eventData);

  return (
    <>
      <FlatList
        data={eventData}
        renderItem={({ item }) => (
          <EventCardComponent
            eventDate={item.tanggalAwal}
            eventName={item.namaAcara}
            status={item.status}
          />
        )}
      />
    </>
  );
};

export default HistoryEventContainer;
