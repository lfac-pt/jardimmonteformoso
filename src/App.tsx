import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/participar" element={<PlaceholderPage title="Participar" />} />
        <Route path="/loja" element={<PlaceholderPage title="Loja" />} />
        {/* Redirect any other path to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

