import "./App.css";
import Homefooter from "./components/Homefooter";
import HomeNav from "./components/HomeNav";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Note from "./components/Note";
import React, { useState } from "react";

export default function App() {
  const [page, SetPage] = useState(true);
  const [showHome, SetShowHome] = useState(true);
  const [noteName, setNoteName] = useState();
  const [noteIndex, setNoteIndex] = useState(0);
  return (
    <div className="App">
      <HomeNav SetPage={SetPage} SetShowHome={SetShowHome} />
      {page ? (
        showHome ? (
          <Homepage
            SetShowHome={SetShowHome}
            setNoteIndex={setNoteIndex}
            setNoteName={setNoteName}
          />
        ) : (
          <Note noteName={noteName} noteIndex={noteIndex} />
        )
      ) : (
        <About />
      )}
      <Homefooter />
    </div>
  );
}
