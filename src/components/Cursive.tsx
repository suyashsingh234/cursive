interface Props {
  darkMode: boolean;
  inputText: String;
}

function Cursive({ darkMode, inputText }: Props) {
  return (
    <text className={darkMode ? "cursive-dark" : "cursive-light"}>
      {inputText}
    </text>
  );
}

export default Cursive;
