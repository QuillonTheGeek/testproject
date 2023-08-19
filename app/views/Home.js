import { View, StyleSheet } from "react-native";
import Hero from "../components/Hero";
import Menu from "../components/Menu";

function Home() {
  return (
    <View style={styles.container}>
      <Hero />
      <Menu />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
