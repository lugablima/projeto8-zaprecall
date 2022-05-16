import { useState } from "react";
import "../assets/css/reset.css";
import "../assets/css/styles.css";
import EntryScreen from "./EntryScreen/EntryScreen";
import HomeScreen from "./HomeScreen/HomeScreen";

export default function App() {
  const [screen, setScreen] = useState("EntryScreen");
  const [enableButton, setEnableButton] = useState("disable");
  const [valueInput, setValueInput] = useState();

  return (
    <>
        {screen === "EntryScreen" ? <EntryScreen setScreen={setScreen} enableButton={enableButton} setEnableButton={setEnableButton} setValueInput={setValueInput} /> : <HomeScreen setScreen={setScreen} setEnableButton={setEnableButton} valueInput={valueInput} setValueInput={setValueInput} />}
    </>
  )
}
