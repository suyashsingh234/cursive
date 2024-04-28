import { Dispatch } from "react";

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<React.SetStateAction<boolean>>;
}

function ToggleButton({ darkMode, setDarkMode }: Props) {
  const handleClick = () => setDarkMode(!darkMode);
  return <button onClick={handleClick}>Dark/Light mode</button>;
}

export default ToggleButton;
