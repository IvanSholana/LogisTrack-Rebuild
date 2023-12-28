import { StyleSheet, View } from "react-native";
import {
  UserProfileAppBar,
  UserProfileContainer,
} from "../containers/Profile/UserProfileContainer";

const ProfileScreen = () => {
  return (
    <>
      <View>
        <UserProfileAppBar />
        <View style={styles.content}>
          <UserProfileContainer />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
});

export default ProfileScreen;
