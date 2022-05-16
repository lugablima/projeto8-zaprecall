import "./style.css";

export default function ResetButton({ qntAnswers, cards, resetStates }) {

    return (
        <>
        {(qntAnswers === cards.length) ? <button className="reset-button" onClick={resetStates}>REINICIAR RECALL</button> : <></>}
        </>
    );
} 