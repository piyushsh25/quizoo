import { QuestionHandler, StateType } from "./Quiz.type";

export function timeRemaining(timer: StateType["timer"]) {
  let minutes: number | string = Math.floor(timer / 60);
  let seconds: number | string = timer - minutes * 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return { minutes, seconds };
}
export const nextQuestionHandler = ({
  option,
  setRecord,
  questions,
  setQuestionIndex,
  questionIndex,
  setScore,
  navigate,
  record,
}: QuestionHandler) => {
  setQuestionIndex((prev) => prev + 1);
  const [correctAnswer] = questions[questionIndex].options.filter((option) => {
    return option.isRight === true;
  });

  setRecord((prev) => {
    return [
      ...prev,
      {
        question: questions[questionIndex].question,
        selectedOption: option.option,
        rightAnswer: correctAnswer.option,
      },
    ];
  });
};
export function calculateScore(
  setScore: QuestionHandler["setScore"],
  record: QuestionHandler["record"]
) {
  const calculateTotalScore = (score: number, num: StateType["answerdata"]) => {
    return num.rightAnswer === num.selectedOption ? score + 10 : score - 5;
  };
  const totalScore = record.reduce(calculateTotalScore, 0);
  return totalScore;
}
