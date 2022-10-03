import { useState } from "react";

import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2d2f30";
      showAlert("Dark Mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
    }
  };

  const toggleColor = (value) => {
    console.log(value);
    setColor(value);
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <Navbar
        title="Textutils"
        mode={mode}
        toggleMode={toggleMode}
        toggleColor={toggleColor}
        color={setColor}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter text to analyze"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
