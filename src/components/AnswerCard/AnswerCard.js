import "./style.css";

export default function AnswerCard() {
  return (
    <div className="answer-card">
      <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
      <div className="actions">
          <button>Não lembrei</button>
          <button> Quase não lembrei</button>
          <button>Zap!</button>
      </div>
    </div>
  );
}
