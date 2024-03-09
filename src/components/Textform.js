import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to uppercase","success");
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowercase","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var textArea = document.getElementById('myBox');
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showalert("copy to clipboard","success");
  };

  const handleExtraSpaces = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showalert("extra spaces removed succseful","success");
  };

  return (
    <>
      <div
        className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}
      >
        <h1>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            value={text}
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleloClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className={`container my-3 ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}
      >
        <h2 className={props.mode === 'dark' ? 'text-white' : 'text-dark'}>
          Your Text Summary
        </h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something to preview it here'}</p>
      </div>
    </>
  );
}
