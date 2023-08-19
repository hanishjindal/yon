const Navbar = ({ noteName, noteIndex }) => {
  const handleDelete = () => {
    let tempArray = JSON.parse(localStorage.getItem("NoteName"));
    tempArray.splice(noteIndex, 1);
    localStorage.setItem("NoteName", JSON.stringify(tempArray));
    window.location.reload();
  };
  return (
    <div className="navbar">
      <h3>{noteName}</h3>
      <div className="navButton">
        <button>Rename</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
export default Navbar;
