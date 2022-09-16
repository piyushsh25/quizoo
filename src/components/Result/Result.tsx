import React from "react";
import { QuizData } from "../QuizPage/Quiz.type";
import ResultHead from "./ResultHead";

function Result({state}:QuizData) {
  return <div>
    <ResultHead state={state}/>

    </div>;
}

export default Result;
