import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const fontType = () => {
    let newText = prompt(
      "Enter font type.\nMake sure the font is installed in your system!"
    );
    setFont(newText);
    props.showAlert("Changed the FONT TYPE", "success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Cleared all Text", "danger");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const textCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied Text to Clipboard", "success");
  };

  const [text, setText] = useState("");
  const [font, setFont] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{
              fontFamily: font,
              backgroundColor: props.mode === "light" ? "white" : "darkgrey",
            }}
            value={text}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-1`}
          onClick={handleUpClick}
        >
          UPPERCASE
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-1`}
          onClick={handleLowClick}
        >
          lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-1`}
          onClick={fontType}
        >
          Change Font Style
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-1`}
          onClick={textCopy}
        >
          Copy to Clipboard
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-1`}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something to Preview"}</p>
      </div>
    </>
  );
}
