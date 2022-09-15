import { useLocation } from "react-router-dom";
import { LocationState } from "../Instruction/Instruction.type";
import { Navbar } from "../Navbar/Navbar";
import { QuizBody } from "./QuizBody";
import {useState} from "react";
import ResultBody from "../Result/ResultBody";
export const Quiz: React.FC = () => {
  const location=useLocation()
  const {state}=location as LocationState
  const [showResult,setShowResult]=useState(false)
  return (
    <>
      <Navbar />
     {showResult?<ResultBody/>: <QuizBody state={state}/>}
    </>
  );
};
