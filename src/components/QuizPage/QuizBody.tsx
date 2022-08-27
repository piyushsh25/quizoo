import { QuizData } from "./Quiz.type";
import "./Quiz.css";
export const QuizBody = ({ state }: QuizData) => {
  const { questions } = state;
  return (
    <div className="quiz-body-container">
      <div className="question-container">{questions[0].question}</div>
      <div className="option-container">
        {questions[0].options.map((option,index) => {
          return <div className="option-individual">{index+1}. {option.option}</div>;
        })}
      </div>
      <div className="button-container">
      <button className="next-button">Next {"-->"}</button>
      </div>
    </div>
  );
};
