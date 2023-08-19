import noteImg from "./media/noteImg.png";
const Notepad = ({ noteName, SetShowHome, idx, setNoteName, setNoteIndex }) => {
  return (
    <div
      className="note"
      onClick={() => {
        SetShowHome(false);
        setNoteName(noteName);
        setNoteIndex(idx);
      }}
    >
      <img className="noteImg" src={noteImg} alt={noteImg} />
      <div className="noteName">{noteName}</div>
    </div>
  );
};

export default Notepad;
