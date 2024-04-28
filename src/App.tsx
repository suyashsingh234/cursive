import Cursive from "./components/Cursive";
import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [inputText, setInputText] = useState("Hello World!");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "div-dark" : "div-light"}>
      <Cursive darkMode={darkMode} inputText={inputText} />
      <Input darkMode={darkMode} setInputText={setInputText} />
      <br />
      <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
