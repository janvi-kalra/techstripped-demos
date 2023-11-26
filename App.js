import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { useState } from "react";
import { FIREBASE_AUTH } from "./firebaseConfig";
import Home from "./app/screens/Home";
import Login from "./app/screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  // Note: creating a react state to store the user.
  const [user, setUser] = useState(null);

  // Note: useEffect with empty dependency array [] means it will run
  // every time this component is mounted.
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
            component={Home}
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

// const InsideStack = createNativeStackNavigator();

// function InsideLayout() {
//   return (
//     <InsideStack.Navigator>
//       <InsideStack.Screen name="My Todos" component={Home} />
//     </InsideStack.Navigator>
//   );
// }
