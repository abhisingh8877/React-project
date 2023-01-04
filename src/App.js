import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import "./styles/App.scss";
import "./styles/header.scss";
import Footer from "./components/Footer.jsx";
import Hecontact from "./components/Hecontact.jsx";
import Myservices from "./components/Myservices.jsx";

function App()
{
  return(
    <Router>
  <Header/>
  <Routes>
    <Route  path="/" element={<Home/>}/>
  <Route path="/Mycontacts" element={<Hecontact/>}/>
  <Route path="/Myservices" element={<Myservices/>}/>
  </Routes>
  <Footer />
  </Router>
  )
}
export default App;