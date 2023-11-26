import { NavigationProp } from "@react-navigation/native";
import { View, Button } from "react-native";
import { FIREBASE_AUTH } from "../../firebaseConfig";

const List = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => navigation.navigate("details")}
        title="Open Details"
      />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  );
};

export default List;
