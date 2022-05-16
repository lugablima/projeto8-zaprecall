import "./style.css";
import logo from "../../assets/img/logo.svg";

export default function EntryScreen({ setScreen, enableButton, setEnableButton, setValueInput }) {
  
  function validateInput(event) {
    const value = event.target.value;
    const condition = ((isNaN(value) === false)) && (Number(value) >= 1) && (Number(value) <= 8) && (Number(value) % 1 === 0);
    if(condition) {
      setEnableButton("enable");
      setValueInput(value);
    } else {
      setEnableButton("disable");
    }
  }

  function changeScreen() {
    if(enableButton === "enable") {
      setScreen("HomeScreen");
    }
  }

  return (
    // <div className="entry-screen">
    //   <img src={logo} alt="Logo do ZapRecall" />
    //   <h1>ZapRecall</h1>
    //   <button onClick={() => setScreen("HomeScreen")}>Iniciar Recall!</button>
    // </div>
    <div className="entry-screen">
      <img src={logo} alt="Logo do ZapRecall" />
      <h1>ZapRecall</h1>
      <input type="text" placeholder="Digite sua meta de zaps..." onChange={validateInput} />
      {<button onClick={changeScreen} className={enableButton}>Iniciar Recall!</button>}
    </div>
  );
}
