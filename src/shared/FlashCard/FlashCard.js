import { useState } from "react";
import "./style.css";
import FrontCard from "../../components/FrontCard/FrontCard";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import AnswerCard from "../../components/AnswerCard/AnswerCard";

export default function FlashCard({ card }) {

  const [statusCard, setStatusCard] = useState("front"); //"question", "answer"

  function showQuestion() {
    if(statusCard === "front") {
      setStatusCard("question");
    }
  }

  return (
    <li className="flash-card" onClick={showQuestion}>
      {statusCard === "front" ? <FrontCard questNumber={card.questNumber} /> : statusCard === "question" ? <QuestionCard setStatusCard={setStatusCard}/> : <AnswerCard />}
    </li>
  );
}
