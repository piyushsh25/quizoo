import { NavigateFunction } from "react-router-dom";
import { QuizType } from "../../QuizContext/Database.type";

export type QuizData = {
  state: QuizType;
};
export type StateType = {
  questionIndex: number;
  option: {
    option: string | null;
  };
  answerdata: {
    question: string;
    selectedOption: string | null;
    rightAnswer:string | null
  };
  score: number;
  timer: number;
};
export type QuestionHandler = {
  option: StateType["option"];
  setRecord: React.Dispatch<
    React.SetStateAction<
      {
        question: string;
        selectedOption: string | null;
        rightAnswer:string | null
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
    selectedOption: string | null;
    rightAnswer:string | null
  }[];
};
