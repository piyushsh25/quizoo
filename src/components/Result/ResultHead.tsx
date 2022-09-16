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
    return ans.selectedOption===null;
  });
  console.log(nullAnswer)
  return (
    <div>
      <div>{state.name}</div>
      <div> Score: {calculateScore(setScore, record)}</div>
      <div>Questions: {state.questions.length}</div>
      <div className="category">
        <div>{state.difficulty}</div>
        <div>{state.category}</div>
      </div>
      <div>
        <div>Correct Answer: {correctAnswer.length}</div>
      </div>
      <div></div>
    </div>
  );
}

export default ResultHead;
