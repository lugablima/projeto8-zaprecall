import "./style.css";
import FlashCard from "../FlashCard/FlashCard";

export default function Deck({ cards, setCards, incrementAnswers, icons, setIcons, marginBottom}) {
   
  return (
    <ul className="deck" style={marginBottom}>
      {cards.map((card, index) => (<FlashCard key={index} questNumber={index + 1} card={card} cards={cards} setCards={setCards} incrementAnswers={incrementAnswers} icons={icons} setIcons={setIcons} />))}
    </ul>
  );
}