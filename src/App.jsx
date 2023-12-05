import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";

import Home from "./assets/Pages/Home";
import Header from "./assets/Components/Header";
import Pokemon from "./assets/pages/Pokemon";
import Type from "./assets/pages/Type";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/type" element={<Type />} />
      </Routes>
    </Router>
  );
}

export default App;
