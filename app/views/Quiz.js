import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { GeneralQuiz, HtmlQuiz, JavaScriptQuiz } from "../data/QuizQuestion";
import Question from "../components/Question";

const Quiz = ({ navigation }) => {
  const [questLoaded, setQuestLoaded] = useState(false);
  const [totalScore, setTotalScore] = useState(100);
  const [completedQuiz, setCompletedQuiz] = useState(false);
  const [questList, setQuestList] = useState([]);
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(1);
  const [questionWorth, setQuestionWorth] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState("");

  // useEffect would be use the question were to be gotten fron an API

  const setupQuiz = async () => {
    let quizData = new Promise((resolve, reject) => {
      const quizzes = [GeneralQuiz, HtmlQuiz, JavaScriptQuiz];
      let selected = quizzes[Math.floor(Math.random() * quizzes.length)];
      let choice = selected;
      resolve(choice);
    });

    // to consume the data from the promise
    let chosenQuiz = await quizData;
    let quizTitle = await chosenQuiz.title[0];
    let quizContent = await chosenQuiz.questions;
    let questionCount = await quizContent.length;
    setSelectedQuiz(quizTitle);
    setQuestList(quizContent);
    setQuestionWorth(Math.floor(100 / questionCount));
    setNumberOfQuestion(questionCount);
    setQuestLoaded(true);
  };

  // to excute the setup quiz
  useEffect(() => {
    setupQuiz();
  }, []);

  // to update the scores for the the question (Question.js)

  const updateScore = (penalty) => {
    let tempScore = totalScore;
    let missed = incorrect;
    let questionTotal = numberOfQuestion;
    let questionDone = questionAnswered;
    setTotalScore(tempScore - penalty);
    setIncorrect(penalty ? missed + 1 : missed);
    setQuestionAnswered(questionDone + 1);
    if (questionAnswered === questionTotal) {
      setCompletedQuiz(true);
    }
  };

  const finishQuiz = () => {
    navigation.navigate("QuizFinish", {
      score: totalScore,
      missed: incorrect,
      questions: numberOfQuestion,
    });
  };
  return (
    <View style={styles.container}>
      <Text>{selectedQuiz}</Text>
      {questLoaded && (
        <FlatList
          keyExtractor={(item) => item.key.toString()}
          data={questList}
          renderItem={({ item }) => (
            <Question
              question={item.question}
              answer1={item.answer1}
              answer2={item.answer2}
              answer3={item.answer3}
              answer4={item.answer4}
              correctAnswer={item.correctAnswer}
              scoreUpdate={updateScore}
              worth={questionWorth}
            />
          )}
        />
      )}
      {completedQuiz && (
        <TouchableHighlight onPress={finishQuiz} style={styles.enabled}>
          <Text>Touch to Finish</Text>
        </TouchableHighlight>
      )}
      {!completedQuiz && (
        <TouchableHighlight style={styles.enabled}>
          <Text>Answer all questions</Text>
        </TouchableHighlight>
      )}
      {!questLoaded && <Text>LOADING</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  disabled: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    height: "10%",
  },
  enabled: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#90ee90",
    height: "10%",
  },
});
export default Quiz;
