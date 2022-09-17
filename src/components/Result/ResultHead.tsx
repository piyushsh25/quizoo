import React from "react";
import { useResult } from "../../Hooks/ResultContext/ResultContext";
import { QuizData } from "../QuizPage/Quiz.type";
import { calculateScore } from "../QuizPage/QuizController";

function ResultHead({ state }: QuizData) {
  const { record, setScore } = useResult();
  const correctAnswer = record.filter((ans) => {
    return ans.rightAnswer === ans.selectedOption;
  });
  const nullAnswer = record.filter((ans) => {
    return ans.selectedOption === null;
  });
  return (
    <div className="result-header-div">
      <div className="quiz-name">{state.name}</div>

      <div className="answer-stat">
        <div className="answer-stat-individual">
          Correctly answered: {correctAnswer.length}
        </div>
        <div className="answer-stat-individual">
          Unattempted question: {nullAnswer.length}
        </div>
        <div className="answer-stat-individual">
          Incorrect answer:{" "}
          {record.length - correctAnswer.length - nullAnswer.length}
        </div>
      </div>
      <div className="quiz-score">
        {" "}
        Score: {calculateScore(setScore, record)}
      </div>
      <div className="category">
        <div>#{state.difficulty}</div>
        <div>#{state.category}</div>
      </div>

      <div></div>
    </div>
  );
}

export default ResultHead;
