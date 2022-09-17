import React from "react";
import { QuizData } from "../QuizPage/Quiz.type";
import ResultHead from "./ResultHead";
import "./Result.css";
import { ResultBody } from "./ResultBody";
function Result({ state }: QuizData) {
  return (
    <div>
      <ResultHead state={state} />
      <hr className="result-break" />
      <ResultBody state={state}/>
    </div>
  );
}

export default Result;
