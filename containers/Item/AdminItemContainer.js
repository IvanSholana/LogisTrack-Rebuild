import { useState } from "react";
import ItemAppBarContainer from "./ItemAppBar";

const AdminItemContainer = () => {
  const [activeScreen, setActiveScreen] = useState("Peralatan");
  return (
    <>
      <ItemAppBarContainer
        content={"Atur Inventaris"}
        shownScreen={setActiveScreen}
      />
    </>
  );
};

export default AdminItemContainer;
