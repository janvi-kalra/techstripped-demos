import { View, Button, Text } from "react-native";
import { FIREBASE_AUTH } from "../../firebaseConfig";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Welcome to the home page of your app! </Text>
      <View>
        {/* Key: note how you implemented signUp/signIn but don't have to implement sign out.  */}
        <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
      </View>
    </View>
  );
};

export default Home;
