
import React from "react";
import "./App.css"
import Map from "./components/Map"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return <>
  <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
        
          <Route  path="/map" element={<Map/>} />
          
        </Routes>
        <Footer />
      </Router>


  </>
}

export default App