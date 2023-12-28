import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../constants/colors";
import TextButtonComponent from "../../components/Button/TextButtonComponent";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

const ItemAppBarContainer = ({ content, shownScreen }) => {
  const [activeScreen, setActiveSceen] = useState(true);

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
          <TouchableOpacity
            style={styles.checkout}
            onPress={() =>
              navigation.navigate("peminjaman", {
                data: keranjang,
                timeline: [dateAwal, dateAkhir],
                dataRuangan: keranjangRuangan,
              })
            }
          >
            <Icon name="shopping-cart" size={30} color="#333" />
          </TouchableOpacity>
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
