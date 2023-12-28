import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../constants/colors";
import TextButtonComponent from "../../components/Button/TextButtonComponent";
import { useState } from "react";

const ItemAppBarContainer = ({ content }) => {
  const [activeScreen, setActiveSceen] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>{content}</Text>
        <View style={styles.navigation}>
          <TextButtonComponent
            text={"Peralatan"}
            additionStyle={activeScreen ? styles.activeTab : null}
            additionButtonStyle={activeScreen ? styles.activeButtonTab : null}
            onPress={() => setActiveSceen(!activeScreen)}
          />
          <TextButtonComponent
            text={"Ruangan"}
            additionStyle={!activeScreen ? styles.activeTab : null}
            additionButtonStyle={!activeScreen ? styles.activeButtonTab : null}
            onPress={() => setActiveSceen(!activeScreen)}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderBottomColor: "#D9D9D9",
  },
  headerText: {
    fontSize: 24,
    color: "#6A994E",
    textAlignVertical: "center",
    paddingLeft: 20,
    backgroundColor: colors.loginText,
  },
  navigation: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  activeTab: {
    color: colors.tabActive,
    textAlign: "center",
  },
  activeButtonTab: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.tabActive,
  },
});

export default ItemAppBarContainer;
