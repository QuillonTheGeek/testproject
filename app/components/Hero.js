import { StyleSheet, Image, View } from "react-native";

function Hero() {
  return (
    <Image
      style={styles.heroImage}
      source={require("./images/camMan.jpg")}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  heroImage: {
    height: "100%",
    width: "100%",
    flex: 6,
  },
});

export default Hero;
