type Options = {
  option: string;
  isRight: boolean;
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
  description:string,
  image:string
};
