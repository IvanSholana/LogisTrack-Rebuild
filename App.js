import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import { Provider } from "react-redux";
import store from "./redux/Store";
import RegisterScreen from "./screens/RegisterScreen";
import ItemScreen from "./screens/ItemScreen";
import HistoryEventScreen from "./screens/HistoryEventScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { colors } from "./constants/colors";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabsScreen = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Item"
        screenOptions={{ tabBarActiveTintColor: colors.tabActive }}
      >
        <Tab.Screen
          name="Item"
          component={ItemScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/images/box.png")}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryEventScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/images/history.png")}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/images/user-alt.png")}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainMenu"
            component={TabsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
