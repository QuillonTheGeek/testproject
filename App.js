import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/views/Home";
import AboutScreen from "./app/views/About";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "About us" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Pics-Hub" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
