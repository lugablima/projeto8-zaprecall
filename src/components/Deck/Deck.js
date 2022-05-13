import "./style.css";
import flashCards from "./flashCards";
import FlashCard from "../../shared/FlashCard/FlashCard";

export default function Deck() {

  return (
    <ul className="deck">
      {flashCards.map((card, index) => (<FlashCard key={index} card={card} />))}
    </ul>
  );
}
