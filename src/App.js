import React from "react";
import EntryScreen from "./components/EntryScreen";
import HomeScreen from "./components/HomeScreen";

export default function App() {
  const [screen, setScreen] = React.useState("EntryScreen");

  return (
    <>
        {screen === "EntryScreen" ? <EntryScreen setScreen={setScreen} /> : <HomeScreen />}
    </>
  )
}
