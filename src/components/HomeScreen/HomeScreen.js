import { useState } from "react";
import "./style.css";
import Header from "../Header/Header";
import Deck from "../Deck/Deck";
import Footer from "../Footer/Footer";
import RenderResult from "../RenderResult/RenderResult";
import CompletedCards from "../CompletedCards/CompletedCards";
import IconsResult from "../IconsResult/IconsResult";
import ResetButton from "../ResetButton/ResetButton";
import flashCards from "./flashCards";

export default function HomeScreen({ setScreen, setEnableButton, valueInput, setValueInput }) {
  const [qntAnswers, setQntAnswers] = useState(0);
  const [cards, setCards] = useState([...flashCards()].map(resetObjects));
  const [icons, setIcons] = useState([]);
  const [marginBottom, setMarginBottom] = useState({ margin: "0 0 95px" });

  function resetObjects(card) {
    const newCard = {...card};
    return newCard;
  }

  function incrementAnswers() {
    if (qntAnswers < cards.length) {
      setQntAnswers(qntAnswers + 1);
    }
    if(qntAnswers === (cards.length - 1)) {
      setMarginBottom({ ...marginBottom, margin: "0 0 269px" });
    }
  }

  function resetStates() {
    setQntAnswers(0);
    setIcons([]);
    setCards([...flashCards()].map(resetObjects));
    setMarginBottom({ margin: "0 0 95px" });
    setScreen("EntryScreen");
    setEnableButton("disable");
    setValueInput();
  }

  return (
    <div className="home-screen">
      <Header />
      <Deck cards={cards} setCards={setCards} incrementAnswers={incrementAnswers} icons={icons} setIcons={setIcons} marginBottom={marginBottom} />
      <Footer>
        <RenderResult icons={icons} cards={cards} valueInput={valueInput} />
        <CompletedCards qntAnswers={qntAnswers} cards={cards} />
        <IconsResult icons={icons} />
        <ResetButton qntAnswers={qntAnswers} cards={cards} resetStates={resetStates} />
      </Footer>
    </div>
  );
}