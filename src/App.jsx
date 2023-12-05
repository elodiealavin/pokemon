import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";

import Home from "./pages/Home";
import Header from "./Components/Header";
import Pokemon from "./pages/Pokemon";
import Type from "./pages/Type";
import TypeList from "./pages/TypeList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/type" element={<Type />} />
        <Route path="/type/:type" element={<TypeList />} />
      </Routes>
    </Router>
  );
}

export default App;
