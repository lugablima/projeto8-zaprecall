import React from "react";
import Footer from "../shared/Footer";

export default function HomeScreen() {
    const [qntAnswers, setQntAnswers] = React.useState(0);
    
    return (
        <div className="home-screen">
            <Footer qntAnswers={qntAnswers} />
            <button onClick={() => setQntAnswers(qntAnswers + 1)}>Inc</button>
        </div>
    );
}