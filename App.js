import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { useState } from "react";
import { FIREBASE_AUTH } from "./firebaseConfig";
import List from "./app/screens/List";
import Login from "./app/screens/Login";
import Details from "./app/screens/Details";

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="My Todos" component={List} />
      <InsideStack.Screen
        name="details"
        options={{ title: "Details Page" }}
        component={Details}
      />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen
            component={InsideLayout}
            name="Inside"
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
