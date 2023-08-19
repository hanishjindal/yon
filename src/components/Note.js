import Navbar from "./notes/Navbar";
import TextArea from "./notes/TextArea";
import Footer from "./notes/Footer";
import React, { useState } from "react";

const Note = ({ noteName, noteIndex }) => {
  const [currentNote, setCurrentNote] = useState(
    JSON.parse(localStorage.getItem("NoteName"))[noteIndex][noteName]
  );
  const handleTextChange = (e) => {
    setCurrentNote(e.target.value);
    let tempArray = JSON.parse(localStorage.getItem("NoteName"));
    tempArray[noteIndex][noteName] = e.target.value;
    localStorage.setItem("NoteName", JSON.stringify(tempArray));
  };
  return (
    <div>
      <Navbar noteName={noteName} noteIndex={noteIndex} />
      <TextArea handleTextChange={handleTextChange} currentNote={currentNote} />
      <Footer currentNote={currentNote} />
    </div>
  );
};

export default Note;
