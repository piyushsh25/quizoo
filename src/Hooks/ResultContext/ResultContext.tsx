import { ReactNode } from "react";
import { useState, useContext, createContext } from "react";
import { StateType } from "../../components/QuizPage/Quiz.type";
type Children = {
  children: ReactNode;
};
const initialState = {
  score: 0,
  questionIndex: 0,
  timer: 0,
  record: [],
  selectedOption: "1qq",
  setScore: () => null,
  setQuestionIndex: () => null,
  setTimer: () => null,
  setRecord: () => null,
  setSelectedOption: () => null,
};
type Context = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  questionIndex: number;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  record: {
    question: string;
    selectedOption: string | null;
    rightAnswer: string | null;
  }[];
  setRecord: React.Dispatch<
    React.SetStateAction<
      {
        question: string;
        selectedOption: string | null;
        rightAnswer: string | null;
      }[]
    >
  >;
  selectedOption: string | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
};

const ResultContext = createContext<Context>(initialState);
export const ResultProvider = ({ children }: Children) => {
  const [questionIndex, setQuestionIndex] =
    useState<StateType["questionIndex"]>(0);
  const [score, setScore] = useState<StateType["score"]>(0);
  const [timer, setTimer] = useState<StateType["timer"]>(300);
  const [record, setRecord] = useState<StateType["answerdata"][]>([]);
  const [selectedOption, setSelectedOption] = useState<
    StateType["answerdata"]["selectedOption"]
  >(() => null);
  return (
    <ResultContext.Provider
      value={{
        questionIndex,
        setQuestionIndex,
        score,
        setScore,
        timer,
        setTimer,
        record,
        setRecord,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};
export const useResult = () => useContext(ResultContext);
