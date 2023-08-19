import { useEffect, useState } from "react";

const Footer = ({ currentNote }) => {
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);
  const [words, setWords] = useState(0);

  useEffect(() => {
    setLine(currentNote.split("\n").length);
    setWords(currentNote.split(" ").length + line - 1);
    setChar(currentNote.length);
  }, [line, currentNote]);
  return (
    <div className="footer">
      <span className="span1">
        Line:{line} &nbsp; Chars:{char} &nbsp; Words:{words}
      </span>
    </div>
  );
};
export default Footer;
