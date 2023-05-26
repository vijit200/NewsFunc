import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
 import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [modechange,setModeChange] = useState("dark")
  const [mode,setMode] = useState("Enable Dark Mode")
  const toggleMode = ()=>{
    if (mode === "Enable Dark Mode"){
      setMode("Disable Dark Mode")
      document.body.style.backgroundColor = "#191D30"
      setModeChange("light")
    }
    else{
      setMode("Enable Dark Mode")
      document.body.style.backgroundColor = "white"
      setModeChange("dark")

    }
  }
  return (
    <>
    <Router>
      <Navbar toggleMode={toggleMode} mode = {mode}/>
      
      <Switch>
          <Route exact path="/">
            <News key="general"  country = "IN" category = "general" modeChange = {modechange}/>
          </Route>
          <Route exact path="/business">
            <News key="business" country = "IN" category = "business" modeChange = {modechange}/>
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" country = "IN" category = "entertainment" modeChange = {modechange}/>
          </Route>
          <Route exact path="/health">
            <News key="health" country = "IN" category = "health" modeChange = {modechange}/>
          </Route>
          <Route exact path="/science">
            <News key="science" country = "IN" category = "science" modeChange = {modechange}/>
          </Route>
          <Route exact path="/sports">
            <News key="sports" country = "IN" category = "sports" modeChange = {modechange}/>
          </Route>
          <Route exact path="/technology">
            <News key="technology"  country = "IN" category = "technology" modeChange = {modechange}/>
          </Route>

        </Switch>
    </Router>
      
      
    </>
  );
}

export default App;
