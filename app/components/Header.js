import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PicsHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState();
  const navigation = useNavigation();

  const toggleUser = () => {
    v;
    if (isLoggedIn) {
      AsyncStorage.setItem("userLoggedIn", "none", (err, result) => {
        setIsLoggedIn(false);
        setLoggedUser("");
        Alert.alert("User logged out");
      });
    } else {
      navigation.navigate("Login");
    }
  };

  useEffect(() => {
    AsyncStorage.getItem("userLoggedIn", (err, result) => {
      if (result === "none") {
        console.log("NONE");
      } else if (result === null) {
        AsyncStorage.setItem("userLoggedIn", "none", (err, result) => {
          console.log("Set user to None");
        });
      } else {
        setIsLoggedIn(true);
        setLoggedUser(result);
      }
    });
  });

  let display = isLoggedIn ? loggedUser : "Tap to Login";

  return (
    <View style={styles.headerStyle}>
      <Image
        style={styles.imageStyle}
        source={require("./images/picsHub.png")}
      />
      <Text style={styles.headText} onPress={toggleUser}>
        {display}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    paddingTop: 20,
    backgroundColor: "#35605a",
    flexDirection: "row",
  },
  imageStyle: {
    alignSelf: "flex-start",
    height: 100,
    width: 50,
    resizeMode: "contain",
    // flex: 1,
    paddingTop: 20,
    marginLeft: "5%",
  },
  headText: {
    textAlign: "right",
    // textAlign: "center",
    textAlignVertical: "center",
    color: "#ffffff",
    flex: 1,
    paddingTop: 50,
    fontSize: 17,
    paddingRight: 15,
  },
});

export default PicsHeader;
