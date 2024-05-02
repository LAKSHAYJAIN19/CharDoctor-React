import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{ useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';




function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
       setMode('dark');
       document.body.style.backgroundColor='#18392B';
       showAlert("Dark mode has been enabled","success"); 
    }
    else
    {
       setMode('light');
       document.body.style.backgroundColor='white';
       showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
      <Navbar title="Char Doctor" abouttext="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      {/* <About/> */}
      <div className="container my-5">
      <Routes>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/>}/>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
