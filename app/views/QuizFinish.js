import { TouchableHighlight, View, StyleSheet, Text } from "react-native";

const QuizFinish = ({ route, navigation }) => {
  const { score, missed, questions } = route.params;

  const exitQuiz = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text>Your quiz score was {score}</Text>
      <Text>
        Your missed on {missed} out of {questions} questions
      </Text>

      <TouchableHighlight onPress={exitQuiz} style={styles.button}>
        <Text>Finish</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
  },
});
export default QuizFinish;
