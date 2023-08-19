import React, { useState } from "react";
import Notepad from "./Notepad";
import addFile from "./media/addFile.png";
import AddNote from "./AddNote";
const Homepage = ({ SetShowHome, setNoteName, setNoteIndex }) => {
  const [showAddNote, setShowAddNote] = useState(false);
  const [error, setError] = useState("");
  const [newNoteName, setNewNoteName] = useState("");
  const [note, setNote] = useState(
    JSON.parse(localStorage.getItem("NoteName"))
  );
  const handleAdd = () => {
    if (newNoteName === "") {
      setError("Please input the name.");
    } else if (
      note !== null &&
      note.find((i) => Object.keys(i)[0] === newNoteName) !== undefined
    ) {
      setError("Please input unique name.");
    } else {
      setError("");
      if (note === null) {
        setNote([{ [newNoteName]: "" }]);
        localStorage.setItem(
          "NoteName",
          JSON.stringify([{ [newNoteName]: "" }])
        );
      } else {
        note.push({ [newNoteName]: "" });
        setNote(note);
        localStorage.setItem("NoteName", JSON.stringify(note));
      }
      setNewNoteName("");
      setShowAddNote(false);
    }
  };
  const handleNameInput = (e) => {
    setNewNoteName(e.target.value);
  };
  const handleAddNote = () => {
    setShowAddNote(true);
  };
  const handleCancel = () => {
    setError("");
    setNewNoteName("");
    setShowAddNote(false);
  };
  return (
    <div className="homepage">
      {note !== null &&
        note.map((val, index) => {
          return (
            <React.Fragment key={index}>
              <Notepad
                noteName={Object.keys(val)[0]}
                setNoteName={setNoteName}
                SetShowHome={SetShowHome}
                setNoteIndex={setNoteIndex}
                idx={index}
              />
            </React.Fragment>
          );
        })}
      <div className="note" onClick={handleAddNote}>
        <img className="noteImg" src={addFile} alt={addFile} />
        <div className="noteName">Add Note</div>
      </div>
      {showAddNote && (
        <AddNote
          handleCancel={handleCancel}
          error={error}
          newNoteName={newNoteName}
          handleNameInput={handleNameInput}
          handleAdd={handleAdd}
        />
      )}
    </div>
  );
};
export default Homepage;
