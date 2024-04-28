import { ChangeEvent, Dispatch } from "react";

interface Props {
  darkMode: boolean;
  setInputText: Dispatch<React.SetStateAction<string>>;
}

function Input({ darkMode, setInputText }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  return (
    <input
      className={darkMode ? "input-dark" : "input-light"}
      placeholder="Enter something"
      onChange={handleChange}
    />
  );
}

export default Input;
