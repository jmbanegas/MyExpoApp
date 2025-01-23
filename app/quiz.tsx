import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

const questions = [
  { question: '¿Qué es TypeScript?', correct: 'Un superconjunto de JavaScript' },
  { question: '¿Qué es React?', correct: 'Una biblioteca de UI' },
];

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });

  const handleAnswer = (isCorrect: boolean) => {
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1),
    }));
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz finalizado. Correctas: ${score.correct}, Incorrectas: ${score.incorrect}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      <Button title="Correcto" onPress={() => handleAnswer(true)} />
      <Button title="Incorrecto" onPress={() => handleAnswer(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  question: { fontSize: 20, marginBottom: 20 },
});
