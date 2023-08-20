import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/views/Home";
import AboutScreen from "./app/views/About";
import RegisterScreen from "./app/views/Register";
import LoginScreen from "./app/views/Login";
import PicsHeader from "./app/components/Header";
import Blog from "./app/views/Blog.js";
import BlogDetail from "./app/views/BlogDetails.js";
import QuizFinish from "./app/views/QuizFinish";
import Quiz from "./app/views/Quiz";
import Video from "./app/views/Video";
import VideoDetail from "./app/views/VideoDetail";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="VideoDetail"
          component={VideoDetail}
          options={{ title: "Watch Lessons" }}
        />
        <Stack.Screen
          name="Videos"
          component={Video}
          options={{ title: "Watch Videos" }}
        />
        <Stack.Screen
          name="QuizFinish"
          component={QuizFinish}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Quiz" component={Quiz} options={{ title: "" }} />
        <Stack.Screen
          name="BlogDetail"
          component={BlogDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Blog"
          component={Blog}
          options={{ title: "PicsHub Blog" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "About us" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ header: () => <PicsHeader /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
