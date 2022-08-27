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
