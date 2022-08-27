import { QuizData, StateType } from "./Quiz.type";
import "./Quiz.css";
import { useState } from "react";
import { nextQuestionHandler, timeRemaining } from "./QuizController";
import { useNavigate } from "react-router-dom";

export const QuizBody = ({ state }: QuizData) => {
  const { questions } = state;
  const [questionIndex, setQuestionIndex] =
    useState<StateType["questionIndex"]>(0);
  const [score, setScore] = useState<StateType["score"]>(0);
  const [timer, setTimer] = useState<StateType["timer"]>(300);
  const [record, setRecord] = useState<StateType["answerdata"][]>([]);
  const navigate = useNavigate();
  setTimeout(() => {
    if (timer > 0) {
      setTimer(timer - 1);
    }
  }, 1000);
  const option = {
    option: "",
    isRight: null,
  };
  if(timer===0){
    navigate("/result")
  }
  return (
    <div className="quiz-body-container">
      <div>score : {score} </div>
      <div>
        time: {timeRemaining(timer).minutes}: {timeRemaining(timer).seconds}
      </div>
      <div className="question-container">
        ( {questionIndex + 1} ): {questions[questionIndex].question}
      </div>
      <div className="option-container">
        {questions[questionIndex].options.map((option, index) => {
          return (
            <div
              className="option-individual"
              key={option.option}
              onClick={() =>
                nextQuestionHandler({
                  option,
                  setRecord,
                  questions,
                  questionIndex,
                  setQuestionIndex,
                  setScore,
                  navigate,
                  record,
                })
              }
            >
              {index + 1}. {option.option}
            </div>
          );
        })}
      </div>
      <div className="button-container">
        {questionIndex + 1 === questions.length ? (
          <button className="next-button">Submit {"-->"}</button>
        ) : (
          <button
            className="next-button"
            onClick={() =>
              nextQuestionHandler({
                option,
                setRecord,
                questions,
                questionIndex,
                setQuestionIndex,
                setScore,
                navigate,
                record,
              })
            }
          >
            Skip {"-->"}
          </button>
        )}
      </div>
    </div>
  );
};