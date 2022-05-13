import "./style.css";
import logo_pequeno from "../../assets/img/logo-pequeno.svg";

export default function Header() {
    return (
        <div className="header">
            <img src={logo_pequeno} alt="Logo do ZapRecall" />
            <h1>ZapRecall</h1>
        </div>
    );
}