import "./style.css";

export default function Footer({ qntAnswers }) {
    return (
        <div className="footer">
            <p>{qntAnswers}/4 CONCLUÍDOS</p>
        </div>
    );
}