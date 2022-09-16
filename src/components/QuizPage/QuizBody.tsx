import { QuestionHandler, QuizData } from "./Quiz.type";
import "./Quiz.css";
import { useEffect } from "react";
import {
  calculateScore,
  nextQuestionHandler,
  timeRemaining,
} from "./QuizController";
import { useNavigate } from "react-router-dom";
import { useResult } from "../../Hooks/ResultContext/ResultContext";

export const QuizBody = ({ state }: QuizData) => {
  const { questions } = state;
  const {
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
    setShowResult,
    showResult,
  } = useResult();
  const navigate = useNavigate();
  useEffect(() => {
    setTimer(300);
  }, []);
  setTimeout(() => {
    if (timer > 0) {
      setTimer(timer - 1);
    }
    if (timer === 0) {
      setShowResult(true);
    }
  }, 1000);
  return (
    <div className="quiz-body-container">
      <div>score : {calculateScore(setScore, record)} </div>
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
        {!(questionIndex + 1 === questions.length) ? (
          <button
            className="next-button"
            onClick={() =>
              nextQuestionHandler({
                setRecord,
                questions,
                setQuestionIndex,
                questionIndex,
                setScore,
                navigate,
                record,
                showResult,
                setShowResult,
                selectedOption,
                setSelectedOption,
              })
            }
          >
            Next
          </button>
        ) : (
          <button
            className="next-button"
            onClick={() =>
              nextQuestionHandler({
                setRecord,
                questions,
                setQuestionIndex,
                questionIndex,
                setScore,
                navigate,
                record,
                showResult,
                setShowResult,
                selectedOption,
                setSelectedOption,
              })
            }
          >
            Submitt
          </button>
        )}
      </div>
    </div>
  );
};
