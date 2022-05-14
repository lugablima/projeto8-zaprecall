import "./style.css";
// import flashCards from "./flashCards";
import FlashCard from "../../shared/FlashCard/FlashCard";

// export default function Deck({ incrementAnswers }) {
  
//   return (
//     <ul className="deck">
//       {flashCards.map((card, index) => (<FlashCard key={index} card={card} incrementAnswers={incrementAnswers} />))}
//     </ul>
//   );
// }

export default function Deck({ cards, setCards, incrementAnswers, icons, setIcons }) {
  
  
  return (
    <ul className="deck">
      {cards.map((card, index) => (<FlashCard key={index} questNumber={index + 1} card={card} cards={cards} setCards={setCards} incrementAnswers={incrementAnswers} icons={icons} setIcons={setIcons} />))}
    </ul>
  );
}


