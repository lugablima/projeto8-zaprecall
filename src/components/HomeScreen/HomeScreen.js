import { useState } from "react";
import "./style.css";
import Header from "../Header/Header";
import Deck from "../Deck/Deck";
import Footer from "../Footer/Footer";
import flashCards from "../Deck/flashCards";

// export default function HomeScreen() {
//     const [qntAnswers, setQntAnswers] = useState(0);

//     function incrementAnswers() {
//         if(qntAnswers < flashCards.length) {
//             setQntAnswers(qntAnswers + 1);
//         }
//     }

//     return (
//         <div className="home-screen">
//             <Header />
//             <Deck incrementAnswers={incrementAnswers}/>
//             <Footer qntAnswers={qntAnswers} />
//         </div>
//     );
// }

export default function HomeScreen() {
  const [qntAnswers, setQntAnswers] = useState(0);
  const [cards, setCards] = useState([...flashCards]);
  const [icons, setIcons] = useState([]);

  function incrementAnswers() {
    if (qntAnswers < cards.length) {
      setQntAnswers(qntAnswers + 1);
    }
  }

  return (
    <div className="home-screen">
      <Header />
      <Deck cards={cards} setCards={setCards} incrementAnswers={incrementAnswers} icons={icons} setIcons={setIcons} />
      <Footer>
        <p>
          {qntAnswers}/{cards.length} CONCLUÍDOS
        </p>
        {(icons.length !== 0) ? <div>{icons}</div> : <></>}
      </Footer>
    </div>
  );
}
