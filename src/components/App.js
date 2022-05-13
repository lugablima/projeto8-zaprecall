import React from "react";
import "../assets/css/reset.css";
import "../assets/css/styles.css";
import EntryScreen from "./EntryScreen/EntryScreen";
import HomeScreen from "./HomeScreen/HomeScreen";

export default function App() {
  const [screen, setScreen] = React.useState("EntryScreen");

  return (
    <>
        {screen === "EntryScreen" ? <EntryScreen setScreen={setScreen} /> : <HomeScreen />}
    </>
  )
}
