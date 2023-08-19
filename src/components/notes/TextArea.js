const TextArea = ({ handleTextChange, currentNote }) => {
  return (
    <div className="textarea">
      <textarea
        name="note"
        placeholder="Type..."
        value={currentNote}
        onChange={handleTextChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
