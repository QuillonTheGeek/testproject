import { StyleSheet, ScrollView, Text, Image } from "react-native";

const aboutPicsHub =
  "PicsHub is a virtual gallery that offers photographers a dedicated space to showcase their masterpieces. Here, passion and talent converge, as artists from diverse backgrounds share their unique perspectives through captivating photographs. Whether you're an amateur seeking recognition or a seasoned professional looking to expand your reach, PicsHub is the canvas that transforms your visions into timeless creations";

const whatPicsHub =
  "At PicsHub, innovation meets interaction. Engage with a community of like-minded creatives, exchange insights, and gather inspiration from a plethora of genres. From mesmerizing landscapes to poignant portraits, every corner of PicsHub is a window into the boundless beauty of the visual world.";

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.pics}
        source={require("../components/images/laptop.jpg")}
      />
      <Text style={styles.aboutTitle}>Who we are?</Text>
      <Text style={styles.aboutText}>{aboutPicsHub}</Text>
      <Image
        style={styles.pics}
        source={require("../components/images/lenses.jpg")}
      />
      <Text style={styles.aboutTitle}>What We Do</Text>
      <Text style={styles.aboutText}>{whatPicsHub}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  pics: {
    height: 300,
  },
  aboutTitle: {
    paddingTop: 10,
  },
  aboutText: {
    paddingBottom: 20,
    paddingTop: 10,
    paddingRight: 10,
  },
});

export default AboutScreen;
