import { useSelector } from "react-redux";
import AdminItemContainer from "../containers/Item/AdminItemContainer";
import UserItemContainer from "../containers/Item/UserItemContainer";

const ItemScreen = ({ navigation, route }) => {
  const status = useSelector((state) => state.login.status);

  return (
    <>
      {status === "Dosen" || status === "Mahasiswa" ? (
        <UserItemContainer navigation={navigation} route={route} />
      ) : (
        <AdminItemContainer />
      )}
    </>
  );
};

export default ItemScreen;
