import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context, Props, ResponseType } from "./Database.type";
import { StateType } from "../../components/QuizPage/Quiz.type";
// inital state for context
const initial = {
  quizData: null,
  score: 0,
  setScore: () => null,
};
const QuizContext = createContext<Context>(initial);
export const QuizProvider = ({ children }: Props) => {
  const [quizData, setQuizData] = useState<Context["quizData"]>(() => null);
  const [score, setScore] = useState<StateType["score"]>(0);
  useEffect(() => {
    const getQuiz: ResponseType["getQuiz"] = async () => {
      try {
        const { data }: ResponseType = await axios.get(
          "https://mocki.io/v1/afdd08b0-d4f3-4e79-8e9e-6b4eca2204fb"
        );
        setQuizData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getQuiz();
  }, []);
  return (
    <QuizContext.Provider value={{ quizData, score, setScore }}>
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => useContext(QuizContext);
