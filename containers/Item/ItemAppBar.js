import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../constants/colors";
import TextButtonComponent from "../../components/Button/TextButtonComponent";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

const ItemAppBarContainer = ({ content, shownScreen, navigation, data }) => {
  const [activeScreen, setActiveSceen] = useState(true);
  const status = useSelector((state) => state.login.status);

  useEffect(() => {
    shownScreen(activeScreen ? "Peralatan" : "Ruangan");
  }, [activeScreen, setActiveSceen]);

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.headerText}>{content}</Text>
          {status !== "Admin" ? (
            <TouchableOpacity
              style={styles.checkout}
              onPress={() =>
                navigation.navigate("Checkout", { eventDate: data })
              }
            >
              <Icon name="shopping-cart" size={30} color="#333" />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.navigation}>
          <TextButtonComponent
            text={"Peralatan"}
            additionStyle={activeScreen ? styles.activeTab : null}
            additionButtonStyle={
              activeScreen ? styles.activeButtonTab : { paddingHorizontal: 50 }
            }
            onPress={() => setActiveSceen(!activeScreen)}
          />
          <TextButtonComponent
            text={"Ruangan"}
            additionStyle={!activeScreen ? styles.activeTab : null}
            additionButtonStyle={
              !activeScreen ? styles.activeButtonTab : { paddingHorizontal: 50 }
            }
            onPress={() => setActiveSceen(!activeScreen)}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderBottomColor: "#D9D9D9",
  },
  headerText: {
    fontSize: 30,
    color: "#6A994E",
    textAlignVertical: "center",
    paddingLeft: 20,
    backgroundColor: colors.loginText,
    fontWeight: "bold",
    fontStyle: "italic",
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
    paddingHorizontal: 50,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.tabActive,
  },
  checkout: {
    paddingEnd: 20,
  },
});

export default ItemAppBarContainer;
