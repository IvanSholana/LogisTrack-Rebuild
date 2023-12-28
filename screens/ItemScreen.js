import { useSelector } from "react-redux";
import AdminItemContainer from "../containers/Item/AdminItemContainer";
import UserItemContainer from "../containers/Item/UserItemContainer";

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
