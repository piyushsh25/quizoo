import { ReactNode } from "react";

// quiz data types
type Options = {
  option: string;
  isRight: boolean | null;
};
type Questions = {
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
};
export type ResponseType = {
  data: QuizType[] | null;
  getQuiz: () => Promise<void>;
};
