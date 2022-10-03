import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Surah from "./pages/Surah";
import ModalWindow from "./components/ModalWindow";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function onClick() {
    setIsOpen(true);
  }
  return (
    <div className="App">
      <Navbar onClick={onClick} />
      <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Home setIsOpen={setIsOpen} />} />
        <Route path="/surah/:id" element={<Surah />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
