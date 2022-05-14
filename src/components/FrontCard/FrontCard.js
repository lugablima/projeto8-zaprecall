import "./style.css";

// export default function FrontCard({ questNumber, statusAnswer }) {
    
//   return (
//     <div className="front-card">
//       <p className={statusAnswer}>Pergunta {questNumber}</p> 
//       <ion-icon name={statusAnswer}></ion-icon>
//     </div>
//   );
// }

export default function FrontCard({ card, questNumber }) {
    
  return (
    <div className="front-card">
      <p className={card.statusAnswer}>Pergunta {questNumber}</p> 
      <ion-icon name={card.statusAnswer}></ion-icon>
    </div>
  );
}