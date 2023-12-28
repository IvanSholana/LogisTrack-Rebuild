import { useSelector } from "react-redux";
import AdminItemContainer from "../containers/Item/AdminItemContainer";
import UserItemContainer from "../containers/Item/UserItemContainer";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import { Text } from "react-native";

const ItemScreen = () => {
  const status = useSelector((state) => state.login.status);

  return (
    <>
      {status === "Dosen" || status === "Mahasiswa" ? (
        <UserItemContainer />
      ) : (
        <AdminItemContainer />
      )}
    </>
  );
};

export default ItemScreen;
