import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { Instruction } from "./components/Instruction/Instruction";
import { Quiz } from "./components/QuizPage/Quiz";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
