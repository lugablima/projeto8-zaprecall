import React from "react";
import "./style.css";
import Header from "../Header/Header";
import Deck from "../Deck/Deck";
import Footer from "../Footer/Footer";

export default function HomeScreen() {
    const [qntAnswers, setQntAnswers] = React.useState(0);
    
    return (
        <div className="home-screen">
            <Header />
            <Deck />
            <Footer qntAnswers={qntAnswers} setQntAnswers={setQntAnswers} />
            {/* <button onClick={() => setQntAnswers(qntAnswers + 1)}>Inc</button> */}
        </div>
    );
}