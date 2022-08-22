import "./Rules.css";

export const Rules = () => {
  return (
    <div className="rules-list">
      <div className="instruction-header">Instructions</div>
      <ol>
        <li> You are allotted 5 minutes to complete each attempt.</li>
        <li>
          Answers - You may review your answer-choices and compare them to the
          correct answers after your final attempt.
        </li>{" "}
        <li>
          To start, click the "Take the Quiz" button. When finished, click the
          "Submit Quiz" button.
        </li>
      </ol>
    </div>
  );
};
