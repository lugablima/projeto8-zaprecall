import React from "react";
import Footer from "../shared/Footer";
import Header from "./Header";

export default function HomeScreen() {
    const [qntAnswers, setQntAnswers] = React.useState(0);
    
    return (
        <div className="home-screen">
            <Header />
            <Footer qntAnswers={qntAnswers} />
            <button onClick={() => setQntAnswers(qntAnswers + 1)}>Inc</button>
        </div>
    );
}