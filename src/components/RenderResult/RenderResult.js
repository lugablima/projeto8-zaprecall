import "./style.css";
import party from "../../assets/img/party.svg";
import sad from "../../assets/img/sad.svg";

function RenderPutz() {

  return (
    <div className="render-putz">
      <div>
        <img src={sad} alt="Emogi de festa!" />
        <h5>Putz...</h5>
      </div>
      <p>Ainda faltam alguns... Mas não desanime!</p>
    </div>
  );
}

function RenderCongratulations() {
  return (
    <div className="render-congratulations">
      <div>
        <img src={party} alt="Emogi de festa!" />
        <h5>Parabéns!</h5>
      </div>
      <p>Você não esqueceu de nenhum flashcard!</p>
    </div>
  );
}

export default function RenderResult({ icons, cards }) {
  const finished = icons.length === cards.length;
  const congratulations = cards.some((card) => card.statusAnswer === "close-circle");
  return (
    <>
    {(!finished) ? <></> : (congratulations) ? <RenderPutz /> : <RenderCongratulations />}
    </>
    );
}
