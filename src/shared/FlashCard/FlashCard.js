// import { useState } from "react"; 
import "./style.css";
import FrontCard from "../../components/FrontCard/FrontCard";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import AnswerCard from "../../components/AnswerCard/AnswerCard";

// export default function FlashCard({ card, incrementAnswers }) {

//   const [statusCard, setStatusCard] = useState("front"); //"question", "answer"
//   const [statusAnswer, setStatusAnswer] = useState("play-outline");

//   function showQuestion() {
//     if(statusCard === "front" && statusAnswer === "play-outline") {
//       setStatusCard("question");
//     }
//   }

//   return (
//     <li className="flash-card" onClick={showQuestion}>
//       {statusCard === "front" ? <FrontCard questNumber={card.questNumber} statusAnswer={statusAnswer}/> : statusCard === "question" ? <QuestionCard question={card.question} setStatusCard={setStatusCard} /> : <AnswerCard answer={card.answer} incrementAnswers={incrementAnswers} statusAnswer={statusAnswer} setStatusAnswer={setStatusAnswer} setStatusCard={setStatusCard} />}
//     </li>
//   );
// }

export default function FlashCard({ questNumber, card, cards, setCards, incrementAnswers, icons, setIcons }) {

  function showQuestion() {
    if(card.statusCard === "front" && card.statusAnswer === "play-outline") {
      card.statusCard = "question";
      setCards([...cards]);
    }
  }

  return (
    <li className="flash-card" onClick={showQuestion}>
      {card.statusCard === "front" ? <FrontCard questNumber={questNumber} card={card} /> : card.statusCard === "question" ? <QuestionCard card={card} cards={cards} setCards={setCards}/> : <AnswerCard questNumber={questNumber} card={card} cards={cards} setCards={setCards} incrementAnswers={incrementAnswers} icons={icons} setIcons={setIcons} />}
    </li>
  );
}