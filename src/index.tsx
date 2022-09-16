import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QuizProvider } from "./QuizContext/Database";
import { ResultProvider } from "./Hooks/ResultContext/ResultContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QuizProvider>
      <ResultProvider>
        <App />
      </ResultProvider>
    </QuizProvider>
  </React.StrictMode>
);
