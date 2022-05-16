import "./style.css";

export default function FrontCard({ card, questNumber }) {
    
  return (
    <div className="front-card">
      <p className={card.statusAnswer}>Pergunta {questNumber}</p> 
      <ion-icon name={card.statusAnswer}></ion-icon>
    </div>
  );
}