import "./style.css";

export default function FrontCard({ questNumber }) {
    
  return (
    <div className="front-card">
      <p>Pergunta {questNumber}</p> 
      <ion-icon name="play-outline"></ion-icon>
    </div>
  );
}
