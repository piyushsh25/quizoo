import { QuizData, StateType } from "./Quiz.type";
import "./Quiz.css";
import { useState } from "react";
export const QuizBody = ({ state }: QuizData) => {
  const { questions } = state;
  const [questionIndex, setQuestionIndex] =
    useState<StateType["questionIndex"]>(0);
  function nextQuestionHandler() {
    setQuestionIndex((prev) => prev + 1);
  }
  return (
    <div className="quiz-body-container">
      <div className="question-container">
        {questions[questionIndex].question}
      </div>
      <div className="option-container">
        {questions[questionIndex].options.map((option, index) => {
          return (
            <div
              className="option-individual"
              key={option.option}
              onClick={nextQuestionHandler}
            >
              {index + 1}. {option.option}
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button className="next-button" onClick={nextQuestionHandler}>
          Next {"-->"}
        </button>
      </div>
    </div>
  );
};
