import { StyleSheet, View } from "react-native";
import {
  UserProfileAppBar,
  UserProfileContainer,
} from "../containers/Profile/UserProfileContainer";
import AdminProfileContainier from "../containers/Profile/AdminProfileContainer";
import { useSelector } from "react-redux";

const ProfileScreen = ({ navigation }) => {
  const status = useSelector((state) => state.login.status);
  return (
    <>
      <View style={{ flex: 1 }}>
        <UserProfileAppBar navigation={navigation} />
        <View style={styles.content}>
          {status !== "Admin" ? (
            <UserProfileContainer />
          ) : (
            <AdminProfileContainier navigation={navigation} />
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 15,
  },
});

export default ProfileScreen;
