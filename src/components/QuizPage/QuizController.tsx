import { NavigateFunction } from "react-router-dom";
import { QuizData, StateType } from "./Quiz.type";

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
type QuestionHandler = {
  option: StateType["option"];
  setRecord: React.Dispatch<
    React.SetStateAction<
      {
        question: string;
        selectedOption: string;
        isRight: boolean | null;
      }[]
    >
  >;
  questions: QuizData["state"]["questions"];
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  questionIndex: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  navigate: NavigateFunction;
  record: {
    question: string;
    selectedOption: string;
    isRight: boolean | null;
  }[];
};
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
  setRecord((prev) => {
    return [
      ...prev,
      {
        question: questions[questionIndex].question,
        selectedOption: option.option,
        isRight: option.isRight,
      },
    ];
  });
  if (questionIndex + 1 === questions.length) {
    navigate("/result", { state: record });
  }
  if (questionIndex + 1 < questions.length) {
    setQuestionIndex((prev) => prev + 1);
  }
  if (option.option === null) {
  } else if (option.isRight) {
    setScore((prev) => prev + 10);
  } else if (option.isRight === false) {
    setScore((prev) => prev - 5);
  }
};
