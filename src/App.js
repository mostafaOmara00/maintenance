import logo from './logo.svg';
import './App.css';
import Intro from "./screens/Intro/Intro";
import Home from "./screens/Home/Home";
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";

function App() {
  const [logoStart, setLogoStart] = useState(performance.getEntriesByType('navigation')[0].type != 'reload' ? null : localStorage.getItem('maintenanceCompanyFirstVisit'));

  useEffect(() => {
    let timeOut;
    console.log('Hello there!', logoStart, localStorage.getItem('maintenanceCompanyFirstVisit'));
    if(logoStart != '1') {
      // if(true){
      console.log('Hello from intro');
      timeOut = setTimeout(() => {
        setLogoStart(1);
        localStorage.setItem("maintenanceCompanyFirstVisit", 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timeOut);
    }
  }, []);

  return (
    <div className="App">
      {
        !logoStart ? (
            <Intro />
        ) : (
            <Routes>
              <Route path={'/'} exact element={<Home />} />
            </Routes>
        )
      }
    </div>
  );
}

export default App;
