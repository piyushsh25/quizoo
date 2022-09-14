import { QuizData, StateType } from "./Quiz.type";
import "./Quiz.css";
import { useEffect, useState } from "react";
import { calculateScore, nextQuestionHandler, timeRemaining } from "./QuizController";
import { useNavigate } from "react-router-dom";

export const QuizBody = ({ state }: QuizData) => {
  const { questions } = state;
  const [questionIndex, setQuestionIndex] =
    useState<StateType["questionIndex"]>(0);
  const [score, setScore] = useState<StateType["score"]>(0);
  const [timer, setTimer] = useState<StateType["timer"]>(300);
  const [record, setRecord] = useState<StateType["answerdata"][]>([]);
  const [selectedOption, setSelectedOption] =
    useState<StateType["answerdata"]["selectedOption"]>(null);
  const navigate = useNavigate();
  setTimeout(() => {
    if (timer > 0) {
      setTimer(timer - 1);
    }
  }, 1000);
  if (timer === 0) {
    navigate("/result");
  }
  const option={
    option:selectedOption
  }
  return (
    <div className="quiz-body-container">
      <div>score : {calculateScore(setScore,record)} </div>
      <div>
        time: {timeRemaining(timer).minutes}: {timeRemaining(timer).seconds}
      </div>
      <div className="question-container">
        ( {questionIndex + 1} ): {questions[questionIndex].question}
      </div>
      <div className="option-container">
        {questions[questionIndex].options.map((option, index) => {
          return (
            <button
              className="option-individual"
              key={option.option}
              onClick={(e) => setSelectedOption(option.option)}
            >
              {index + 1}. {option.option}
            </button>
          );
        })}
      </div>
      <div className="button-container">
        <button
          className="next-button"
          onClick={() =>
            nextQuestionHandler({
              option,
              setRecord,
              questions,
              setQuestionIndex,
              questionIndex,
              setScore,
              navigate,
              record
            })
          }
        >
          {questionIndex + 1 === questions.length ? "Submitt" : "Next"}
        </button>
      </div>
    </div>
  );
};
