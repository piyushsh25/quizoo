import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { LocationState } from "./Instruction.type";
import { QuizDetails } from "./QuizDetails";
import { Rules } from "./Rules";
import {useEffect} from "react"
import { useResult } from "../../Hooks/ResultContext/ResultContext";
export const Instruction: React.FC = () => {
  const location = useLocation();
  const { state } = location as LocationState;
  const {showResult,setShowResult,setQuestionIndex,setScore,setSelectedOption,setRecord}=useResult()
  // every value being set to default in the instruction page so that the quiz cannot be resumed after quitting
  useEffect(()=>{
    setShowResult(false)
    setQuestionIndex(0)
    setScore(()=>0)
    setSelectedOption("")
    setRecord(()=>[])
  },[])
  return (
    <div>
      <Navbar />
      <QuizDetails state={state} />
      <Rules />
      <div className="quiz-cta">
        <Link to="/quiz" state={state} className="cta-link">
        Take the quiz
        </Link>
      </div>
    </div>
  );
};
