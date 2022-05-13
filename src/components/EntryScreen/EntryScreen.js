import "./style.css";
import logo from "../../assets/img/logo.svg";

export default function EntryScreen({ setScreen }) {
  return (
    <div className="entry-screen">
      <img src={logo} alt="Logo do ZapRecall" />
      <h1>ZapRecall</h1>
      <button onClick={() => setScreen("HomeScreen")}>Iniciar Recall!</button>
    </div>
  );
}
