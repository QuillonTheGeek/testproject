import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const picsHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggeedUser, setLoggedUser] = useState();
  const navigation = useNavigation();

  const toggleUser = () => {
    if (isLoggedIn) {
      AsyncStorage.getItem("userLoggedIn", "none", (err, result) => {
        setIsLoggedIn(false);
        setLoggedUser("");
        Alert.alert("User logged out");
      });
    } else {
      navigation.navigate("Home");
    }
  };
};
