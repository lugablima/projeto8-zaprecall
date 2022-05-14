import "./style.css";
import turn_arrow from "../../assets/img/turn_arrow.svg";

// export default function QuestionCard({ question, setStatusCard }) {
//   return (
//     <div className="question-card">
//       <p>{question}</p>
//       <img src={turn_arrow} alt="Seta para virar o card" onClick={() => setStatusCard("answer")} />
//     </div>
//   );
// }

export default function QuestionCard({ card, cards, setCards }) {
  function changeStatusCard() {
    card.statusCard = "answer";
    setCards([...cards]);
  }

  return (
    <div className="question-card">
      <p>{card.question}</p>
      <img src={turn_arrow} alt="Seta para virar o card" onClick={changeStatusCard} />
    </div>
  );
}