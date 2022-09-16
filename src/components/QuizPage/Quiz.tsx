import { useLocation } from "react-router-dom";
import { LocationState } from "../Instruction/Instruction.type";
import { Navbar } from "../Navbar/Navbar";
import { QuizBody } from "./QuizBody";
import {useState} from "react";
import Result from "../Result/Result";
import { useResult } from "../../Hooks/ResultContext/ResultContext";
export const Quiz: React.FC = () => {
  const location=useLocation()
  const {state}=location as LocationState
  const {showResult,setShowResult}=useResult()
  return (
    <>
      <Navbar />
     {showResult?<Result state={state}/>: <QuizBody state={state}/>}
    </>
  );
};
