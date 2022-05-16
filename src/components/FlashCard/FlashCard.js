import "./style.css";
import FrontCard from "../FrontCard/FrontCard";
import QuestionCard from "../QuestionCard/QuestionCard";
import AnswerCard from "../AnswerCard/AnswerCard";

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