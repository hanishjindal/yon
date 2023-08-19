const AddNote = ({
  handleCancel,
  error,
  handleNameInput,
  newNoteName,
  handleAdd,
}) => {
  return (
    <div className="newNote" onClick={handleCancel}>
      <div className="noteBox" onClick={(e) => e.stopPropagation()}>
        <h2>Add New Note</h2>
        <input
          type="text"
          className="newNodeInput"
          placeholder="Add Note Name..."
          value={newNoteName}
          onChange={handleNameInput}
        />
        {error !== "" && <div className="error">{error}</div>}
        <div className="button">
          <button className="add" onClick={handleAdd}>
            Add
          </button>
          <button className="cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
