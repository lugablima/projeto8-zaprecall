import { useState } from "react";
import "./style.css";
import Header from "../Header/Header";
import Deck from "../Deck/Deck";
import Footer from "../Footer/Footer";
import RenderResult from "../RenderResult/RenderResult";
import CompletedCards from "../CompletedCards/CompletedCards";
import IconsResult from "../IconsResult/IconsResult";
import flashCards from "../Deck/flashCards";

export default function HomeScreen() {
  const [qntAnswers, setQntAnswers] = useState(0);
  const [cards, setCards] = useState([...flashCards]);
  const [icons, setIcons] = useState([]);
  const [marginBottom, setMarginBottom] = useState({ margin: "0 0 95px" });

  function incrementAnswers() {
    if (qntAnswers < cards.length) {
      setQntAnswers(qntAnswers + 1);
    }
    if(qntAnswers === (cards.length - 1)) {
      setMarginBottom({ ...marginBottom, margin: "0 0 179px" });
    }
  }

  return (
    <div className="home-screen">
      <Header />
      <Deck cards={cards} setCards={setCards} incrementAnswers={incrementAnswers} icons={icons} setIcons={setIcons} marginBottom={marginBottom} />
      <Footer>
        <RenderResult icons={icons} cards={cards} />
        <CompletedCards qntAnswers={qntAnswers} cards={cards} />
        <IconsResult icons={icons} />
      </Footer>
    </div>
  );
}
