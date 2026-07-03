import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (

    <BrowserRouter>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>

        <Route
          path="/"
          element={<Home darkMode={darkMode} />}
        />

        <Route
          path="/education"
          element={<Education darkMode={darkMode} />}
        />

        <Route
          path="/experience"
          element={<Experience darkMode={darkMode} />}
        />

        <Route
          path="/skills"
          element={<Skills darkMode={darkMode} />}
        />

        <Route
          path="/projects"
          element={<Projects darkMode={darkMode} />}
        />

        <Route
          path="/certificates"
          element={<Certificates darkMode={darkMode} />}
        />

        <Route
          path="/contact"
          element={<Contact darkMode={darkMode} />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;