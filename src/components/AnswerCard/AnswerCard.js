import "./style.css";

// export default function AnswerCard({ answer, incrementAnswers, setStatusAnswer, statusAnswer, setStatusCard }) {
//     function chanceStatusAnswer(newState) {
//         if(statusAnswer === "play-outline") {
//             incrementAnswers();
//             setStatusCard("front");
//             setStatusAnswer(newState);
//         }
//     }

//   return (
//     <div className="answer-card">
//       <p>{answer}</p>
//       <div className="actions">
//           <button onClick={() => chanceStatusAnswer("close-circle")}>Não lembrei</button>
//           <button onClick={() => chanceStatusAnswer("help-circle")}> Quase não lembrei</button>
//           <button onClick={() => chanceStatusAnswer("checkmark-circle")}>Zap!</button>
//       </div>
//     </div>
//   );
// }

export default function AnswerCard({ questNumber, card, cards, setCards, incrementAnswers, icons, setIcons }) {
  function chanceStatusAnswer(newState) {
      if(card.statusAnswer === "play-outline") {
          incrementAnswers();
          card.statusCard = "front";
          card.statusAnswer = newState;
          setCards([...cards]);
          setIcons([...icons, <ion-icon key={questNumber} name={newState}></ion-icon>]);
      }
  }

return (
  <div className="answer-card">
    <p>{card.answer}</p>
    <div className="actions">
        <button onClick={() => chanceStatusAnswer("close-circle")}>Não lembrei</button>
        <button onClick={() => chanceStatusAnswer("help-circle")}> Quase não lembrei</button>
        <button onClick={() => chanceStatusAnswer("checkmark-circle")}>Zap!</button>
    </div>
  </div>
);
}