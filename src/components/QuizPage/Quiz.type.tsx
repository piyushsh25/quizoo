import { NavigateFunction } from "react-router-dom";
import { QuizType } from "../../QuizContext/Database.type";

export type QuizData = {
  state: QuizType;
};
export type StateType = {
  questionIndex: number;
  option: {
    option: string;
    isRight: boolean | null;
  };
  answerdata: {
    question: string;
    selectedOption: string;
    isRight: boolean | null;
  };
  score: number;
  timer:number
};
export type QuestionHandler = {
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