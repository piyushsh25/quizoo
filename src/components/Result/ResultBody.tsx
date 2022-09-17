import React from "react";
import { Options } from "../../Hooks/QuizContext/Database.type";
import { useResult } from "../../Hooks/ResultContext/ResultContext";
import { QuizData } from "../QuizPage/Quiz.type";

export const ResultBody = ({ state }: QuizData) => {
  const { record } = useResult();
  const { questions } = state;

  function filteredOption(question: String, option: String) {
    let ques;
    ques = record.find((rec) => rec.question === question);
    if (ques?.rightAnswer === option) {
      return <div className="success">{option}</div>;
    }
    if (
      ques?.selectedOption === option &&
      ques.rightAnswer === ques.selectedOption
    ) {
      return <div className="success">{option}</div>;
    }
    if (
      ques?.selectedOption === option &&
      ques?.selectedOption !== ques.rightAnswer
    ) {
      return <div className="error">{option}</div>;
    }

    return <div className="null">{option}</div>;
  }
  function correctAnswer(options: Options[]) {
    const answer = options.filter((option) => {
      return option.isRight === true;
    });
    console.log(answer);
    return answer;
  }
  return (
    <div>
      <div className="quiz-body-container">
        {questions.map(({ question, options }) => {
          return (
            <div>
              <div className="question-container">{question}</div>
              <div className="option-container result">
                {options.map((option) => {
                  return (
                    <div className="option-individual result">
                      {/* {(filteredOption(question,option.option)?.rightAnswer===option.option)?<div className="success">otp</div>:<div>out</div>}  */}
                      {filteredOption(question, option.option)}
                    </div>
                  );
                })}
              </div>
              <div className="correct-answer-display">
                <div>Correct answer :</div>
                {correctAnswer(options).map((option) => {
                  return <div>{option.option}</div>;
                })}
              </div>

              <hr className="result-break" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
