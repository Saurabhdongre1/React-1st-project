import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import Change from './components/Change';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert('Dark mode is Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light mode is Enabled', 'success');
    }
  };

  return (
           <>
              <Navbar title="Text Converter" mode={mode} togglemode={togglemode} />
              <Alert alert={alert} />
              <div className="container my-3">
                <Textform heading="Enter the text to analyze below" mode={mode} showalert={showalert} />
              </div>
            </>
        // {<Change />}
  );
}

export default App;
