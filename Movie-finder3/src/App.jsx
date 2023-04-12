import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Movie from "./components/Movie";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="404" element={<NotFound />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
}

export default App;
