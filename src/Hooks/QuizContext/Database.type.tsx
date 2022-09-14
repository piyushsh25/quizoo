import { ReactNode } from "react";

// quiz data types
export type Options = {
  option: string;
  isRight: boolean | null;
};
export type Questions = {
  question: string;
  points: number;
  options: Options[];
};
export type QuizType = {
  name: string;
  questions: Questions[];
  category: string;
  difficulty: string;
  description: string;
  image: string;
};

// type for children
export type Props = {
  children: ReactNode;
};
// type for context state
export type Context = {
  quizData: QuizType[] | null;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};
export type ResponseType = {
  data: QuizType[] | null;
  getQuiz: () => Promise<void>;
};
