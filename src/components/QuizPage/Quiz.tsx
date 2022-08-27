import { useLocation } from "react-router-dom";
import { LocationState } from "../Instruction/Instruction.type";
import { Navbar } from "../Navbar/Navbar";
import { QuizBody } from "./QuizBody";

export const Quiz: React.FC = () => {
  const location=useLocation()
  const {state}=location as LocationState
  return (
    <>
      <Navbar />
      <QuizBody state={state}/>
    </>
  );
};
