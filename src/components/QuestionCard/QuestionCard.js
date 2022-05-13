import "./style.css";
import turn_arrow from "../../assets/img/turn_arrow.svg";

export default function QuestionCard({ setStatusCard }) {
  return (
    <div className="question-card">
      <p>Question Card Question Card Question Card Question Card Question Card Question Card Question Card</p>
      <img src={turn_arrow} alt="Seta para virar o card" onClick={() => setStatusCard("answer")} />
    </div>
  );
}
