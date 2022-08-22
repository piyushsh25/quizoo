import { Link } from "react-router-dom";
import { LocationState } from "./Instruction.type";

export const QuizDetails = ({ state }: LocationState) => {
  return (
    <div>
      <div className="quiz-details">
        <div> {state.name}</div>
        <div>Total Questions: {state.questions.length}</div>
        <div>
          Category: {state.category}, {state.difficulty}
        </div>
      </div>
    </div>
  );
};
