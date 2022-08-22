import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { LocationState } from "./Instruction.type";
import { QuizDetails } from "./QuizDetails";
import { Rules } from "./Rules";

export const Instruction: React.FC = () => {
  const location = useLocation();
  const { state } = location as LocationState;
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
