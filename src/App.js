import { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import ActionBar from "./Components/ActionBar";
import MoviesList from "./Components/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ActionBar />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
